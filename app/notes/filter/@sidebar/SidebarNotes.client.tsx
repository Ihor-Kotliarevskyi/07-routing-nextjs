"use client"

import css from "./SidebarNotes.module.css"
import { TAGS } from "@/components/NoteForm/NoteForm"

function SidebarNotes() {
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <a href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </a>
      </li>
      {TAGS.map((tag) => (
        <li key={`id_${tag}`} className={css.menuItem}>
        <a
          href={`/notes/filter/${tag}`}
          className={css.menuLink}
        >
          {tag}
        </a>
      </li>
    ))}
    </ul>
  );
}

export default SidebarNotes
