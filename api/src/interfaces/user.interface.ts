import { Types } from "mongoose";

export interface IUser {
  _id: Types.ObjectId;
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  profilePicture?: string;
  bannerImage?: string;
  bio?: string;
  location?: string;
  followers: Types.ObjectId[]; // or IUser[] if populated
  following: Types.ObjectId[]; // or IUser[] if populated
  createdAt: Date;
  updatedAt: Date;
}
