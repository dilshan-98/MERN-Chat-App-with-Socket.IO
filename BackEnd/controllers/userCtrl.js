import generateToken from "../config/generateToken.js";
import user from "../Models/userModel.js";

const userRegister = async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    return res.status(404).json({ msg: "Missing credentials" });
    // throw new Error("Missing credentials");
  }

  const userExists = await user.findOne({ email });

  if (userExists) {
    return res.status(400).json({ msg: "User already Exists" });
    // throw new Error("User already Exists");
  }

  const userSaved = await user.create({ name, email, password, pic });

  if (userSaved) {
    return res.status(201).json({
      msg: "Successfully registered",
      token: generateToken(userSaved._id),
    });
  } else {
    return res.status(400).json({ msg: "User Registration Unsuccessful" });
    // throw new Error("User Registration Unsuccessful");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(404).json({ msg: "Missing credentials" });

  const userExists = await user.findOne({ email });

  if (!userExists) {
    return res.status(400).json({ msg: "Invalid credentials" });
  }

  const currentUser = await user.findOne({ email });

  if (currentUser && (await currentUser.matchPassword(password))) {
    return res.status(200).json({ msg: "Login successful", token: generateToken(currentUser._id) });
  } else {
    return res.status(400).json({ msg: "Invalid credentials" });
  }
};

export { userRegister, login };
