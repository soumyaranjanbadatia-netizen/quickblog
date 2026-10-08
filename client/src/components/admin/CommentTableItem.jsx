import toast from "react-hot-toast";
import { useAppContext } from "../../context/AppContext";
import { IoCheckmark, IoTrashOutline } from "react-icons/io5";

const CommentTableItem = ({ comment, fetchComments, onDeleteClick }) => {
  const { blog, createdAt, _id } = comment;

  const BlogDate = new Date(createdAt);

  const { axios } = useAppContext();

  const approveComment = async () => {
    try {
      const { data } = await axios.post("/api/admin/approve-comment", {
        id: _id,
      });

      if (data.success) {
        toast.success(data.message);
        await fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <tr className="border-y border-gray-300">
      {/* Comment information */}
      <td className="px-3 sm:px-6 py-4 align-top">
        <div className="max-w-full break-wrap-break-word text-xs sm:text-sm">
          <p className="mb-2">
            <b className="font-medium text-gray-600">Blog:</b>{" "}
            {blog?.title || "Unknown Blog"}
          </p>

          <p className="mb-2">
            <b className="font-medium text-gray-600">Name:</b> {comment.name}
          </p>

          <p>
            <b className="font-medium text-gray-600">Comment:</b>{" "}
            {comment.content}
          </p>
        </div>
      </td>

      {/* Date */}
      <td className="px-3 sm:px-6 py-4 max-sm:hidden whitespace-nowrap text-sm">
        {BlogDate.toLocaleDateString()}
      </td>

      {/* Actions */}
     

      <td className="px-3 sm:px-6 py-4 align-top">
        <div className="flex items-center gap-2 sm:gap-4">
          {comment.isApproved ? (
            <>
              {/* Approved status */}
              <span className="text-[10px] sm:text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-2 sm:px-3 py-1 whitespace-nowrap">
                Approved
              </span>

              {/* Move back to Not Approved */}
              <button
                type="button"
                onClick={approveComment}
                title="Move to not approved"
                className="
            text-[10px] sm:text-xs
            border border-gray-400
            bg-gray-50
            text-gray-600
            rounded-full
            px-2 sm:px-3
            py-1
            whitespace-nowrap
            hover:bg-gray-100
            hover:text-gray-800
            transition-all
            cursor-pointer
          "
              >
                Not Approved
              </button>
            </>
          ) : (
            <>
              {/* Approve */}
              <button
                type="button"
                onClick={approveComment}
                title="Approve comment"
                className="
            w-8 h-8
            flex items-center justify-center
            rounded-full
            bg-green-50
            text-green-600
            hover:bg-green-100
            hover:scale-105
            transition-all
            cursor-pointer
          "
              >
                <IoCheckmark size={18} />
              </button>

              {/* Delete */}
              <button
                type="button"
                onClick={() => onDeleteClick(_id)}
                title="Delete comment"
                className="
            w-8 h-8
            flex items-center justify-center
            rounded-full
            bg-red-50
            text-red-500
            hover:bg-red-100
            hover:scale-105
            transition-all
            cursor-pointer
          "
              >
                <IoTrashOutline size={17} />
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
