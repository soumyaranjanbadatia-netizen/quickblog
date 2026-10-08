import { useEffect, useState } from "react";
import CommentTableItem from "../../components/admin/CommentTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const { axios } = useAppContext();

  const handleDeleteClick = (commentId) => {
    setSelectedCommentId(commentId);
    setShowDeleteModal(true);
  };

  const confirmDeleteComment = async () => {
    try {
      const { data } = await axios.post("/api/admin/delete-comment", {
        id: selectedCommentId,
      });

      if (data.success) {
        toast.success(data.message);
        await fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setShowDeleteModal(false);
      setSelectedCommentId(null);
    }
  };

  const cancelDeleteComment = () => {
    setShowDeleteModal(false);
    setSelectedCommentId(null);
  };
  const fetchComments = async () => {
    try {
      const { data } = await axios.get("/api/admin/comments");
      data.success ? setComments(data.comments) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <div className="w-full min-w-0 flex-1 pt-5 px-4 sm:pt-12 sm:px-5 sm:pl-16 bg-blue-50/50 overflow-x-hidden">
        <div className="w-full max-w-3xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {" "}
          <h1>Comments</h1>
          <div className="flex flex-wrap gap-3">
            {" "}
            <button
              onClick={() => setFilter("Approved")}
              className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === "Approved" ? "bg-blue-100 text-blue-600" : "text-gray-700"}`}
            >
              Approved
            </button>
            <button
              onClick={() => setFilter("Not Approved")}
              className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === "Not Approved" ? "bg-blue-100 text-blue-600" : "text-gray-700"}`}
            >
              Not Approved
            </button>
          </div>
        </div>
        <div className="relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-white shadow rounded-lg scrollbar-hide">
          <table
            className="w-full text-sm text-gray-500
        "
          >
            <thead className="text-xs text-gray-700 text-left uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Blog Title and Comment
                </th>
                <th scope="col" className="px-6 py-3 max-sm:hidden">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {comments
                .filter((comment) => {
                  if (filter === "Approved") return comment.isApproved === true;
                  return comment.isApproved === false;
                
                })
                .map((comment, index) => (
                  <CommentTableItem
                    key={comment._id}
                    comment={comment}
                    index={index + 1}
                    fetchComments={fetchComments}
                    onDeleteClick={handleDeleteClick}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-gray-800">
              Confirm Delete
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Are you sure you want to delete this comment?
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={cancelDeleteComment}
                className="px-5 py-2 text-sm rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                No
              </button>

              <button
                onClick={confirmDeleteComment}
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

export default Comments;
