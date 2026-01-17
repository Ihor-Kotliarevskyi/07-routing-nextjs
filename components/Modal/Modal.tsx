"use client";

import React, { useEffect, type ReactNode } from "react";
import css from "./Modal.module.css";
import { useRouter } from "next/navigation";

interface ModalProps {
  readonly children: ReactNode | React.ReactElement<{ close?: () => void }>;
}

interface ChildProps {
  close?: () => void;
}

function Modal({ children }: ModalProps) {
  const router = useRouter();

  const close = () => router.back();

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
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

  return (
    <div
      className={css.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        {React.isValidElement<ChildProps>(children)
          ? React.cloneElement(children, { close })
          : children}
      </div>
    </div>
  );
}

export default Modal;
