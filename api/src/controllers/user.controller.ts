import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import { clerkClient, getAuth } from "@clerk/express";
import { ObjectId } from "mongodb";
import Notification from "../models/notification.model.js";
import { NotificationType } from "../enums/index.js";

export const getUserProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const { username } = req.params;

    const user = await User.findOne({ username });
    if (!user) return void res.status(404).json({ error: "User not found" });

    res.status(200).json({ user });
  }
);

export const updateProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const { userId } = getAuth(req);

    const user = await User.findOneAndUpdate({ clerkId: userId }, req.body, {
      new: true,
    });
    if (!user) return void res.status(404).json({ error: "User not found" });

    res.status(200).json({ user });
  }
);

export const syncUser = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  // check if user already exists in mongodb
  const existingUser = await User.findOne({ clerkId: userId });
  if (existingUser)
    return void res
      .status(200)
      .json({ user: existingUser, message: "User already exists" });

  // create new user from Clerk data
  const clerkUser = await clerkClient.users.getUser(userId!);

  const userData = {
    clerkId: userId,
    email: clerkUser.emailAddresses[0].emailAddress,
    firstName: clerkUser.firstName || "",
    lastName: clerkUser.lastName || "",
    username: clerkUser.emailAddresses[0].emailAddress.split("@")[0],
    profilePicture: clerkUser.imageUrl || "",
  };

  const user = await User.create(userData);

  res.status(201).json({ user, message: "User created successfully" });
});

export const getCurrentUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { userId } = getAuth(req);
    const user = await User.findOne({ clerkId: userId });

    if (!user) return void res.status(404).json({ error: "User not found" });

    res.status(200).json({ user });
  }
);

export const followUser = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = getAuth(req);
  const { targetUserId } = req.params;

  if (userId === targetUserId)
    return void res.status(400).json({ error: "You cannot follow yourself" });

  const currentUser = await User.findOne({ clerkId: userId });
  const targetUser = await User.findById(targetUserId);

  if (!currentUser || !targetUser)
    return void res.status(404).json({ error: "User not found" });

  const targetObjectId = new ObjectId(targetUserId);
  const isFollowing = currentUser.following.includes(targetObjectId);

  if (isFollowing) {
    // unfollow
    await User.findByIdAndUpdate(currentUser._id, {
      $pull: { following: targetUserId },
    });
    await User.findByIdAndUpdate(targetUserId, {
      $pull: { followers: currentUser._id },
    });
  } else {
    // follow
    await User.findByIdAndUpdate(currentUser._id, {
      $push: { following: targetUserId },
    });
    await User.findByIdAndUpdate(targetUserId, {
      $push: { followers: currentUser._id },
    });

    // create notification
    await Notification.create({
      from: currentUser._id,
      to: targetUserId,
      type: NotificationType.FOLLOW,
    });
  }

  res.status(200).json({
    message: isFollowing
      ? "User unfollowed successfully"
      : "User followed successfully",
  });
});
