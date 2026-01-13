import SidebarNotes from "./SidebarNotes.client";
import css from "../LayoutNotes.module.css"

function Sidebar () {
    return <div className={css.container}><SidebarNotes /></div>
}

export default Sidebar;