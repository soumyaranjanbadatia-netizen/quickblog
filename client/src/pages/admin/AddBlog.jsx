import { useEffect, useRef, useState } from "react";
import { blogCategories } from "../../assets/assets";
import { MdCloudUpload } from "react-icons/md";
import Quill from "quill";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { parse } from "marked";

const AddBlog = () => {
  const { axios, fetchBlogs } = useAppContext();

  const [isAdding, setIsAdding] = useState(false);

  const [loading, setLoading] = useState(false);
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("ALL");
  const [isPublished, setIsPublished] = useState(false);

  const generateContent = async () => {
    if (!title) return toast.error("Please enter the title");
    try {
      setLoading(true);
      const { data } = await axios.post("/api/blog/generate", {
        prompt: title,
      });
      
      if (data.success) {
        const html = parse(data.content);

        quillRef.current.clipboard.dangerouslyPasteHTML(0, html);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setIsAdding(true);

      const blog = {
        title,
        subTitle,
        description: quillRef.current.root.innerHTML,
        category,
        isPublished,
      };
      const formData = new FormData();
      formData.append("blog", JSON.stringify(blog));
      formData.append("image", image);

      const { data } = await axios.post("/api/blog/add", formData);

      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
        setImage(false);
        setTitle("");
        setIsPublished(false);
        quillRef.current.root.innerHTML = "";
        setCategory("Startup");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsAdding(false);
    }
  };

  useEffect(() => {
    // initiate quill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll"
    >
      <div className="bg-blue-50/50">
        <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded ">
          <p>Upload Thumbnail</p>

          <label
            htmlFor="image"
            className="mt-2 w-25 h-20 border border-dashed border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:border-primary transition-all"
          >
            {!image ? (
              <MdCloudUpload className="w-12 h-12 text-primary" />
            ) : (
              <img
                src={URL.createObjectURL(image)}
                alt="Thumbnail preview"
                className="w-full h-full object-cover rounded-md"
              />
            )}
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </label>

          <p className="mt-4">Blog Title</p>
          <input
            type="text"
            placeholder="Type here"
            required
            className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <p className="mt-4">Sub Title</p>
          <input
            type="text"
            placeholder="Type here"
            required
            className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
            onChange={(e) => setSubTitle(e.target.value)}
            value={subTitle}
          />
          <p className="mt-4">Blog Description</p>
          <div className="max-w-lg h-72 pb-16 sm:pb-10 pt-2 relative">
            <div ref={editorRef} className="border-black"></div>

            {loading && (
              <div className="absolute right-0 top-0 bottom-0 left-0 flex items-center justify-center bg-black/10 mt-2">
                <div className="w-8 h-8 rounded-full border-4 border-gray-300 border-t-blue-500 animate-spin"></div>
              </div>
            )}

            <button
              disabled={loading}
              type="button"
              onClick={generateContent}
              className="absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer"
            >
              Generate with AI
            </button>
          </div>
          <p className="mt-4">Blog Category</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            className="mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded"
          >
            <option value="">Select Category</option>
            {blogCategories.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <div className="flex gap-2 mt-5">
            <p>Publish Now</p>
            <input
              type="checkbox"
              checked={isPublished}
              className="scale-125 cursor-pointer"
              onChange={(e) => setIsPublished(e.target.checked)}
            />
          </div>
          <button
            disabled={isAdding}
            type="submit"
            className="mt-8 w-40 h-10 bg-primary text-white rounded  cursor-pointer text-sm"
          >
            {isAdding ? "Adding..." : "Add Blog"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddBlog;
