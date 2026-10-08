import sharp from "sharp";
import ImageKit, { toFile } from "@imagekit/nodejs";
import fs from "fs";
import imagekit from "../config/imageKit.js";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";
import main from "../config/gemini.js";


export const addBlog = async (req, res) => {
  let imagePath;

  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog,
    );

    const imageFile = req.file;

    // Check if all fields are present
    if (!title || !description || !category || !imageFile) {
      return res.json({
        success: false,
        message: "Missing required fields",
      });
    }

    imagePath = imageFile.path;

    // Resize and optimize image before uploading to ImageKit
    const optimizedImage = await sharp(imagePath)
      .rotate()
      .resize({
        width: 2400,
        height: 2400,
        fit: "inside",
        withoutEnlargement: true,
      })
      .jpeg({
        quality: 82,
        mozjpeg: true,
      })
      .toBuffer();

    // Convert Buffer into an ImageKit-compatible uploadable file
    const uploadableImage = await toFile(
      optimizedImage,
      "optimized-blog-image.jpg",
    );

    const response = await imagekit.files.upload({
      file: uploadableImage,
      fileName: `${Date.now()}-${imageFile.originalname
        .replace(/\.[^/.]+$/, "")
        .replace(/[^a-zA-Z0-9-_]/g, "-")}.jpg`,
      folder: "/blogs",
    });
    const image = response.url;
    // Create blog
    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
      author: req.adminId,
    });

    res.json({
      success: true,
      message: "Blog added successfully",
    });
  } catch (error) {
    console.log("ADD BLOG ERROR:", error);

    res.json({
      success: false,
      message: error.message,
    });
  } finally {
    // Remove temporary uploaded file
    if (imagePath) {
      try {
        await fs.promises.unlink(imagePath);
      } catch (error) {
        console.log("TEMP FILE DELETE ERROR:", error.message);
      }
    }
  }
};

export const getAllBlogs = async (req, res) => {
  try {

    const blogs = await Blog.find({ isPublished: true }).populate(
      "author",
      "name",
    );

    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;

    const blog = await Blog.findById(blogId).populate("author", "name email");
    if (!blog) {
      return res.json({
        success: false,
        message: "Blog not found",
      });
    }
    res.json({ success: true, blog });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.body;

    const deletedBlog = await Blog.findOneAndDelete({
      _id: id,
      author: req.adminId,
    });


    if (!deletedBlog) {
      return res.json({
        success: false,
        message: "Blog not found or unauthorized",
      });
    }

    // Delete comments belonging to this blog
    await Comment.deleteMany({
      blog: id,
    });

    res.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {

    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;

    const blog = await Blog.findOne({
      _id: id,
      author: req.adminId,
    });

    if (!blog) {
      return res.json({
        success: false,
        message: "Blog not found or unauthorized",
      });
    }

    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.json({ success: true, message: "Blog status updated" });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const addComment = async (req, res) => {
  try {
    const { blog, name, content } = req.body;
    await Comment.create({ blog, name, content });
    res.json({ success: true, message: "Comment added for review" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getBlogComments = async (req, res) => {
  try {
    const { blogId } = req.body;
    const comments = await Comment.find({
      blog: blogId,
      isApproved: true,
    }).sort({ createdAt: -1 });
    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};



export const generateContent = async (req, res) => {
  try {
    const { prompt } = req.body;

    const content = await main(
      `${prompt}. Generate a blog content for this topic in simple text format.`,
    );

    res.json({ success: true, content });
  } catch (error) {
    console.error("Gemini Error:", error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};
