import { Types } from "mongoose";

export interface IPost {
  _id?: Types.ObjectId;
  user: Types.ObjectId;
  content: string;
  image: string;
  likes: Types.ObjectId[];
  comments: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}
