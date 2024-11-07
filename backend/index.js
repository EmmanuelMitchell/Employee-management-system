import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./db/db.js";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on ${process.env.PORT}`);
});
