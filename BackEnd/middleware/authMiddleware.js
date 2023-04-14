import jwt from "jsonwebtoken";
import User from "../Models/userModel.js";

const auth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ msg: "Not Authorized to Access!" });
  }

  try {
    //Strat 1

    //This also works but the "user" obj only returns the id in here. If you need to get name, email, ... you have to get it from the db
    //just denoted in down below strat
    // jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, user) => {
    //     if(err) return res.status(401).json({msg: "Not Authorized to Access!"});

    //     req.user = user;
    //     console.log(req.user);

    //     next();
    // });

    //Strat 2

    const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);

    const user = await User.findById(decoded.id).select("-password");

    if (!user)
      return res.status(401).json({ msg: "Not Authorized to Access!" });

    req.user = user;

    console.log(req.user);

    next();
  } catch (error) {
    return res.status(401).json({ msg: "Not Authorized to Access!" });
  }
};

export default auth;
