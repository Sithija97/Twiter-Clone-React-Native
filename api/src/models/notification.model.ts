import mongoose from "mongoose";
import { NotificationType } from "../enums/index.js";
import { INotification } from "../interfaces/notification.interface.js";

const notificationSchema = new mongoose.Schema<INotification>(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: [
        NotificationType.FOLLOW,
        NotificationType.LIKE,
        NotificationType.COMMENT,
      ],
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      default: null,
    },
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
    },
  },
  { timestamps: true }
);

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;
