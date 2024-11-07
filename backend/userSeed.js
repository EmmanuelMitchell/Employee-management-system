import User from "../backend/model/userModel.js";
import bcrypt from "bcrypt";
import connectDB from "./db/db.js";

const registerUser = async () => {
  try {
    await connectDB();
    console.log("Database connected successfully");

    // Hash the password
    const hashPassword = bcrypt.hashSync("password", 10);
    console.log("Password hashed successfully:", hashPassword);

    const newUser = new User({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin",
    });

    // Save the user to the database
    await newUser.save();
    console.log("New user created successfully:", newUser);
  } catch (error) {
    console.error("Error From SeedUser:", error);
  }
};

registerUser();
