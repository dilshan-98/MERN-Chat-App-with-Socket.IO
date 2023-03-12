import mongoose from "mongoose";

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      default:
        "https://icon-library.com/icon/anonymous-avatar-icon-25.html.html",
    },
  },
  {
    timestamps: true
  }
);

const user = mongoose.model("user", userModel);

export default user;