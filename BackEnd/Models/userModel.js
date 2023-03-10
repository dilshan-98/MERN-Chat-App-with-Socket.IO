const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/icon/anonymous-avatar-icon-25.html.html",
    },
  },
  {
    timestamps: true
  }
);

const user = mongoose.model("user", userModel);

module.exports = user;
