import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import bcrypt from "bcrypt";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        message: "Email and password are required",
      });
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        email: admin.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.json({
      success: true,
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getsAllBlogsAdmin = async (req, res) => {
  try {
    const blogs = await Blog.find({
      author: req.adminId,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      blogs,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllComments = async (req, res) => {
  try {
    // First find blogs belonging to the logged-in admin
    const adminBlogs = await Blog.find({
      author: req.adminId,
    }).select("_id");

    const blogIds = adminBlogs.map((blog) => blog._id);

    // Then get only comments belonging to those blogs
    const comments = await Comment.find({
      blog: { $in: blogIds },
    })
      .populate("blog")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      comments,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const getDashboard = async (req, res) => {
  try {
    // Get only blogs created by the logged-in admin
    const adminBlogs = await Blog.find({
      author: req.adminId,
    }).sort({ createdAt: -1 });

    const blogs = adminBlogs.length;

    // Get only comments made on this admin's blogs
    const blogIds = adminBlogs.map((blog) => blog._id);

    const comments = await Comment.countDocuments({
      blog: { $in: blogIds },
    });

    // Get only this admin's drafts
    const drafts = await Blog.countDocuments({
      author: req.adminId,
      isPublished: false,
    });

    // Only latest 5 blogs of this admin
    const recentBlogs = adminBlogs.slice(0, 5);

    const dashboardData = {
      blogs,
      comments,
      drafts,
      recentBlogs,
    };

    res.json({
      success: true,
      dashboardData,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCommentById = async (req, res) => {
  try {
    const { id } = req.body;
    await Comment.findByIdAndDelete(id);
    res.json({ success: true, message: "Comment deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


export const approveCommentById = async (req, res) => {
  try {
    const { id } = req.body;

    const comment = await Comment.findById(id);

    if (!comment) {
      return res.json({
        success: false,
        message: "Comment not found",
      });
    }

    comment.isApproved = !comment.isApproved;

    await comment.save();

    res.json({
      success: true,
      message: comment.isApproved
        ? "Comment approved successfully"
        : "Comment moved to not approved",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const adminRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.json({
        success: false,
        message: "Admin already exists",
      });
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    if (!passwordRegex.test(password)) {
      return res.json({
        success: false,
        message:
          "Password must be at least 8 characters and contain uppercase, lowercase, number, and special character",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });

    res.json({
      success: true,
      message: "Admin registered successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
