"use client";

import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { useState } from "react";

function NotePreviewClient() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);
  
  return (
    <>
      {isOpenModal && (
        <Modal
          onClose={() => {
            setIsOpenModal(false);
          }}
        >
          <NotePreview
          />
        </Modal>
      )}
    </>
  );
}

export default NotePreviewClient;
