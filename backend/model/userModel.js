import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, enum: ["admin", "employee"], required: true },
  profileImage: { type: String },
  createdAt: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

export default User;
