import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected Successfully");
  } catch (error) {
    console.log("Error From Database Connect", error);
  }
};

export default connectDB;
