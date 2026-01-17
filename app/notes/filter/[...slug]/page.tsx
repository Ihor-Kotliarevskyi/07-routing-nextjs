import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type Props = {
  readonly params: Promise<{ slug: string[] }>;
};

async function NotesByTag({ params }: Props) {
  const { slug } = await params;

  const searchText = "";
  const tag = slug[0] === "all" ? undefined : slug[0];
  const currentPage = 1;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", searchText, currentPage, tag],
    queryFn: () => fetchNotes(searchText, currentPage, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}

export default NotesByTag;
