import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/users", authMiddleware);

export default router;
