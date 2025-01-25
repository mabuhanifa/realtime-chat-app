import express from "express";
import {
  getMessages,
  getUsersForSidebar,
} from "../controllers/message.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/users", authMiddleware, getUsersForSidebar);

router.get("/:id", authMiddleware, getMessages);

export default router;
