import express from "express";
import {
  adminLogin,
  adminRegister,
  approveCommentById,
  deleteCommentById,
  getAllComments,
  getDashboard,
  getsAllBlogsAdmin,
} from "../controller/adminController.js";
import auth from "../middleware/auth.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.get("/comments", auth, getAllComments);
adminRouter.get("/blogs", auth, getsAllBlogsAdmin);
adminRouter.post("/delete-comment", auth, deleteCommentById);
adminRouter.post("/approve-comment", auth, approveCommentById);
adminRouter.get("/dashboard", auth, getDashboard);
adminRouter.post("/register", adminRegister);
export default adminRouter;
