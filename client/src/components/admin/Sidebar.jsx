import { NavLink } from "react-router-dom";
import { MdListAlt, MdOutlineAddToPhotos } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { LiaCommentsSolid } from "react-icons/lia";

const Sidebar = () => {
  const navClass = ({ isActive }) =>
    `flex items-center justify-center md:justify-start
     gap-0 md:gap-3
     py-3.5 px-2 md:px-9
     w-full md:min-w-64
     cursor-pointer
     ${isActive ? "bg-primary/10 border-r-4 border-primary" : ""}`;

  return (
    <aside className="flex flex-col w-14 sm:w-16 md:w-64 h-full shrink-0 border-r border-gray-200 pt-6 bg-white">
      {/* Dashboard */}
      <NavLink end to="/admin" className={navClass}>
        <IoHomeOutline className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />

        <p className="hidden md:inline-block whitespace-nowrap">Dashboard</p>
      </NavLink>

      {/* Add Blog */}
      <NavLink to="/admin/addBlog" className={navClass}>
        <MdOutlineAddToPhotos className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />

        <p className="hidden md:inline-block whitespace-nowrap">Add Blogs</p>
      </NavLink>

      {/* Blog List */}
      <NavLink to="/admin/listBlog" className={navClass}>
        <MdListAlt className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />

        <p className="hidden md:inline-block whitespace-nowrap">Blog List</p>
      </NavLink>

      {/* Comments */}
      <NavLink to="/admin/comments" className={navClass}>
        <LiaCommentsSolid className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />

        <p className="hidden md:inline-block whitespace-nowrap">Comments</p>
      </NavLink>
    </aside>
  );
};

export default Sidebar;
