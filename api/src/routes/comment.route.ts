import express from "express";
import {
  getComments,
  createComments,
  deleteComments,
} from "../controllers/comment.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// public routes
router.get("/posts/:postId", getComments);

// protected routes
router.post("/posts/:postId", protectRoute, createComments);
router.delete("/:commentId", protectRoute, deleteComments);

export default router;
