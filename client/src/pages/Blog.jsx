import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import Navbar from "../components/Navbar";
import moment from "moment";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const Blog = () => {
  const { id } = useParams();

  const { axios } = useAppContext();

  const [nameError, setNameError] = useState("");

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`);
      data.success ? setData(data.blog) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchComments = async () => {
    try {
      const { data } = await axios.post("/api/blog/comments", { blogId: id });
      if (data.success) {
        setComments(data.comments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/blog/add-comment", {
        blog: id,
        name,
        content,
      });
      if (data.success) {
        toast.success(data.message);
        setName("");
        setContent("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);
  return data ? (
    <div className="relative overflow-x-hidden">
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      />
      <Navbar />
      <div className="text-center mt-6 sm:mt-8 text-gray-600">
        <p className="text-primary py-4 font-medium">
          Published on {moment(data.createdAt).format("MMMM Do YYYY")}
        </p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
          {data.title}
        </h1>
        <h2 className="my-5 max-w-lg truncate mx-auto">{data.subTitle}</h2>
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">
          {data.author?.name || "Unknown Author"}
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto my-10 mt-6 px-4 sm:px-5">
        <img
          src={data.image}
          alt=""
          // className="w-full rounded-2xl sm:rounded-3xl mb-5 object-cover"
          className="w-full max-w-4xl max-h-125 mx-auto rounded-2xl sm:rounded-3xl mb-8 object-contain "
        />
        <div
          className="rich-text max-w-3xl mx-auto ql-editor"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
        {/* comment section */}

        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Comments ({comments.length})</p>
          <div className="flex flex-col gap-4">
            {comments.map((item, index) => (
              <div
                key={index}
                className="relative w-full max-w-xl p-4 rounded bg-primary/2 border border-primary/5 text-gray-600"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src={assets.user_icon} alt="" className="w-6" />
                  <p className="font-medium">{item.name}</p>
                </div>
                <p className="text-sm max-w-md ml-8 wrap-break">
                  {item.content}
                </p>
                <div className="mt-3 text-right text-xs text-gray-400">
                  {moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Add comment section */}

        <div className="max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Add your comment</p>
          <form
            onSubmit={addComment}
            className="flex flex-col items-start gap-4 max-w-lg"
          >
            <input
              // onChange={(e) => setName(e.target.value)}
              onChange={(e) => {
                const value = e.target.value;

                if (/^[A-Za-z\s]*$/.test(value)) {
                  setName(value);
                  setNameError("");
                } else {
                  setNameError(
                    "Name can't contain numbers or special characters.",
                  );
                }
              }}
              value={name}
              type="text"
              placeholder="Name"
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
            {nameError && (
              <p className="mt-1 text-xs text-red-500">{nameError}</p>
            )}
            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="Comment"
              className="w-full p-2 border border-gray-300 rounded outline-none h-48"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white rounded p-2
            px-8 hover:scale-102 transition-all cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        {/* share buttons */}
        <div className="my-10 sm:my-24 max-w-3xl mx-auto">
          <p className="font-semibold my-4">
            Share this article on social media
          </p>

          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-[0_2px_7px_rgba(0,0,0,0.18)] hover:-translate-y-1 hover:shadow-[0_4px_10px_rgba(0,0,0,0.22)] transition-all duration-200"
            >
              <FaFacebookF className="text-base sm:text-lg" />
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-[0_2px_7px_rgba(0,0,0,0.18)] hover:-translate-y-1 hover:shadow-[0_4px_10px_rgba(0,0,0,0.22)] transition-all duration-200"
            >
              <FaTwitter className="text-base sm:text-lg" />
            </a>

            <a
              href="https://workspace.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Plus"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-[0_2px_7px_rgba(0,0,0,0.18)] hover:-translate-y-1 hover:shadow-[0_4px_10px_rgba(0,0,0,0.22)] transition-all duration-200"
            >
              <FaGooglePlusG className="text-lg sm:text-xl" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};

export default Blog;
