import express from "express";
const port = process.env.PORT || 5001;
import { config } from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

connectDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
