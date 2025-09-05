import { Types } from "mongoose";
import { NotificationType } from "../enums/index.js";

export interface INotification {
  _id?: Types.ObjectId;
  from: Types.ObjectId;
  to: Types.ObjectId;
  type:
    | NotificationType.FOLLOW
    | NotificationType.LIKE
    | NotificationType.COMMENT;
  post: Types.ObjectId | null;
  comment: Types.ObjectId | null;
  createdAt: Date;
  updatedAt: Date;
}
