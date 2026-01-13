"use client";

import React, { useEffect, type ReactNode } from "react";
import css from "./NotePreview.module.css";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

interface NotePreviewProps {
  children: ReactNode;
}

function NotePreviewModal({ children }: NotePreviewProps) {
  const router = useRouter();

  const close = () => router.back();

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [close]);

  return createPortal(
    <div
      className={css.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={close}>Back</button>
      </div>
    </div>,
    document.body
  );
}

export default NotePreviewModal;
