import express from "express";
const port = process.env.PORT || 5001;
import * as dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
dotenv.config();
const app = express();

app.use("/api/auth", authRoutes);

connectDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
