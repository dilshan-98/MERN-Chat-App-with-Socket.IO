import express from "express";
import auth from "../middleware/authMiddleware.js";
import { accessChat } from "../controllers/chatCtrl.js";
const router = express.Router();

router.route("/").post(auth, accessChat);
// router.get("/", auth, fetchChats);
// router("/group").post(auth, createGroupChat);
// router("/renameGroup").put(auth, renameGroup);
// router("/removeFromGroup").put(auth, removeFromGroup);
// router("/addToGroup").put(auth, addToGroup);

export default router;