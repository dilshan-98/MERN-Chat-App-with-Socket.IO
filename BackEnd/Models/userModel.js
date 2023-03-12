import mongoose from "mongoose";
import bcrypt from "bcrypt";

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

userModel.methods.matchPassword = async function(password){
  return await bcrypt.compare(password, this.password);
}

userModel.pre("save", async function(next){
  const user = this;

  if(!user.isModified('password')) next();

  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(user.password, salt);

  next();
});



const user = mongoose.model("user", userModel);

export default user;