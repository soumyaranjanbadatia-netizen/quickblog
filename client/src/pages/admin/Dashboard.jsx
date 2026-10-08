import { useEffect, useState } from "react";
import BlogTableItem from "../../components/admin/BlogTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaComments } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { FaBlogger } from "react-icons/fa";
import { TbArticleFilled } from "react-icons/tb";
const Dashboard = () => {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const { axios, fetchBlogs: fetchPublicBlogs } = useAppContext();
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
        await fetchDashboard();
        await fetchPublicBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setShowDeleteModal(false);
      setSelectedBlogId(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedBlogId(null);
  };
  const fetchDashboard = async () => {
    try {
      const { data } = await axios.get("/api/admin/dashboard");
      data.success
        ? setDashboardData(data.dashboardData)
        : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <>
      <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
            <div className="bg-indigo-50 p-4 rounded">
              <FaBlogger className="text-primary text-2xl" />
            </div>

            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashboardData.blogs}
              </p>
              <p className="text-gray-400 font-light">Blogs</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
            <div className="bg-indigo-50 p-4 rounded-md">
              <FaComments className="text-primary text-2xl" />
            </div>
            <div>
              <p
                onClick={() => navigate("/admin/comments")}
                className="text-xl font-semibold text-gray-600"
              >
                {dashboardData.comments}
              </p>
              <p className="text-gray-400 font-light">Comments</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
            <div className="bg-indigo-50 p-4 rounded-md">
              <LuNotebookPen className="text-primary text-2xl" />
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashboardData.drafts}
              </p>
              <p className="text-gray-400 font-light">Drafts</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 m-4 mt-6 text-gray-600">
            <div className="flex items-center gap-2">
              <TbArticleFilled size={30} color="#4F46E5" />
              <span className="text-lg font-semibold text-gray-900">
                Latest Blogs only
              </span>
            </div>
          </div>
          <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
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
                {dashboardData.recentBlogs.map((blog, index) => {
                  return (
                    <BlogTableItem
                      key={blog._id}
                      blog={blog}
                      fetchBlogs={fetchDashboard}
                      index={index + 1}
                      onDeleteClick={handleDeleteClick}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

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
              <button
                onClick={cancelDelete}
                className="px-5 py-2 text-sm rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                No
              </button>

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
    </>
  );
};

export default Dashboard;
