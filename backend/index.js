import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./db/db.js";
import authRouter from "../backend/routes/authRoute.js";

connectDB();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
