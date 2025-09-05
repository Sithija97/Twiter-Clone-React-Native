import express from "express";
import {
  followUser,
  getCurrentUser,
  getUserProfile,
  syncUser,
  updateProfile,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// public routes
router.get("/profile/:username", getUserProfile);

// protected routes
router.get("/sync", protectRoute, syncUser);
router.get("/me", protectRoute, getCurrentUser);
router.get("/profile", protectRoute, updateProfile);
router.post("/follow/:targetUserId", protectRoute, followUser);

export default router;
