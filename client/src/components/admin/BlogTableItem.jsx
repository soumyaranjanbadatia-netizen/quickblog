import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";
import { useAppContext } from "../../context/AppContext";

const BlogTableItem = ({ blog, fetchBlogs, index, onDeleteClick }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);

  const { axios, fetchBlogs: fetchPublicBlogs } = useAppContext();

  const togglePublish = async () => {
    try {
      const { data } = await axios.post("/api/blog/toggle-publish", {
        id: blog._id,
      });

      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
        await fetchPublicBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <tr className="border-y border-gray-300">
      <th className="px-2 py-4">{index}</th>

      <td className="px-2 py-4">{title}</td>

      <td className="px-2 py-4 max-sm:hidden">{BlogDate.toDateString()}</td>

      <td className="px-2 py-4 max-sm:hidden">
        <p
          className={`${
            blog.isPublished ? "text-green-600" : "text-orange-700"
          }`}
        >
          {blog.isPublished ? "Published" : "Unpublished"}
        </p>
      </td>

      <td className="px-2 py-4 flex text-xs gap-3">
        <button
          onClick={togglePublish}
          className="border px-2 py-0.5 mt-1 rounded cursor-pointer"
        >
          {blog.isPublished ? "Unpublish" : "Publish"}
        </button>

        <button
          onClick={() => onDeleteClick(blog._id)}
          className="p-2 rounded-full bg-red-50 text-red-500 hover:bg-red-100 hover:scale-110 transition-all cursor-pointer"
        >
          <RxCross2 className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
};

export default BlogTableItem;
