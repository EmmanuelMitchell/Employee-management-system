import User from "../backend/model/userModel.js";
import bcrypt from "bcrypt";
import connectDB from "./db/db.js";
const registerUser = async () => {
  connectDB();
  try {
    const hashPassword = await bcrypt.hash("password", 10);
    const newUser = new User({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin",
    });

    await newUser.save();
  } catch (error) {
    console.log("Error From SeedUser", error);
  }
};

registerUser();
