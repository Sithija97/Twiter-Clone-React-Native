import { getAuth } from "@clerk/express";
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import Notification from "../models/notification.model.js";

export const getNotifications = asyncHandler(
  async (req: Request, res: Response) => {
    const { userId } = getAuth(req);

    const user = await User.findOne({ clerkId: userId });
    if (!user) return void res.status(404).json({ error: "User not found" });

    const notifications = await Notification.find({ to: user._id })
      .sort({ createdAt: -1 })
      .populate("from", "username firstName lastName profilePicture")
      .populate("post", "content image")
      .populate("comment", "content");

    res.status(200).json({ notifications });
  }
);

export const deleteNotification = asyncHandler(
  async (req: Request, res: Response) => {
    const { userId } = getAuth(req);
    const { notificationId } = req.params;

    const user = await User.findOne({ clerkId: userId });
    if (!user) return void res.status(404).json({ error: "User not found" });

    const notification = await Notification.findOneAndDelete({
      _id: notificationId,
      to: user._id,
    });

    if (!notification)
      return void res.status(404).json({ error: "Notification not found" });

    res.status(200).json({ message: "Notification deleted successfully" });
  }
);
