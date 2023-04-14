import express from "express";
import { userRegister, login, allUsers } from "../controllers/userCtrl.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(userRegister).get(auth, allUsers);
router.route("/login").post(login);

//This one also works
// router.get("/", auth, allUsers);

export default router;
