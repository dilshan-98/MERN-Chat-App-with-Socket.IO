import express from "express";
import {userRegister, login} from "../controllers/userCtrl.js";

const router = express.Router();

router.route("/").post(userRegister);
router.route("/login").get(login);

export default router;