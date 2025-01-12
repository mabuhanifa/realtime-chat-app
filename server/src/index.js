import cookieParser from "cookie-parser";
import { config } from "dotenv";
import express from "express";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
const port = process.env.PORT || 5001;

config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
connectDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
