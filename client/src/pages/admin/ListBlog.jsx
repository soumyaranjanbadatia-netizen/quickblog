import { useEffect, useState } from "react";
import BlogTableItem from "../../components/admin/BlogTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  const { axios, fetchBlogs: fetchPublicBlogs } = useAppContext();

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/admin/blogs");

      if (data.success) {
        setBlogs(data.blogs);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Open delete confirmation
  const handleDeleteClick = (blogId) => {
    setSelectedBlogId(blogId);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      const { data } = await axios.post("/api/blog/delete", {
        id: selectedBlogId,
      });

      if (data.success) {
        toast.success(data.message);

        // Refresh Admin Blog List
        await fetchBlogs();

        // Refresh Public Blog List
        await fetchPublicBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("DELETE ERROR:", error);
      toast.error(error.message);
    } finally {
      setShowDeleteModal(false);
      setSelectedBlogId(null);
    }
  };

  // No - close modal
  const cancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedBlogId(null);
  };

  return (
    <div className="w-full min-w-0 flex-1 overflow-x-hidden pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
      <h1>All Blogs</h1>

      <div className="relative w-full max-w-4xl h-4/5 mt-4 overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-600 text-left uppercase">
            <tr>
              <th scope="col" className="px-2 py-4 xl:px-6">
                #
              </th>

              <th scope="col" className="px-2 py-4">
                Blog Title
              </th>

              <th scope="col" className="px-2 py-4 max-sm:hidden">
                Date
              </th>

              <th scope="col" className="px-2 py-4 max-sm:hidden">
                Status
              </th>

              <th scope="col" className="px-2 py-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog, index) => {
              return (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                  onDeleteClick={handleDeleteClick}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-gray-800">
              Confirm Delete
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Are you sure you want to delete this blog?
            </p>

            <div className="mt-6 flex justify-end gap-3">
              {/* NO */}
              <button
                onClick={cancelDelete}
                className="px-5 py-2 text-sm rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                No
              </button>

              {/* YES */}
              <button
                onClick={confirmDelete}
                className="px-5 py-2 text-sm rounded-md bg-red-500 text-white hover:bg-red-600"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListBlog;
