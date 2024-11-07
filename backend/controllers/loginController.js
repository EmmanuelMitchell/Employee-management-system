import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginAuth = async (req, res) => {
  const { email, password } = req.body;

  // Check for email and password
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Email and password are required" });
  }

  try {
    // Check if user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }

    // If user has no password, it is likely an issue with the user creation process
    if (!user.password) {
      console.error("Error: User password is undefined.");
      return res
        .status(400) // Bad request instead of 500
        .json({ success: false, message: "User password is not set" });
    }

    // Compare provided password with hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Create JWT token with user details and expiration time
    const token = jwt.sign(
      {
        _id: user._id,
        role: user.role,
      },
      process.env.JWT_KEY,
      { expiresIn: "10d" }
    );

    // Respond with token and user details
    res.status(200).json({
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        role: user.role,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

const verify = (req, res) => {
  // If user is authenticated, return user details
  return res.status(200).json({ success: true, user: req.user });
};

export { loginAuth, verify };
