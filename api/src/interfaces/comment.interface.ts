import { Types } from "mongoose";

export interface IComment {
  _id?: Types.ObjectId;
  user: Types.ObjectId;
  post: Types.ObjectId;
  content: string;
  likes: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}
