import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";
import NotePreview from "@/components/NotePreview/NotePreview";

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreviewModal = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <NotePreview >
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteDetailsClient />
      </HydrationBoundary>
    </NotePreview>
  );
};

export default NotePreviewModal;
