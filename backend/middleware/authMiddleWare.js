import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

const verifyToken = async (req, res, next) => {
  try {
    // Check if authorization header exists and contains a token
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ success: false, error: "Token Not provided" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    if (!decoded) {
      return res.status(401).json({ success: false, error: "Token Not Valid" });
    }

    // Find the user associated with the token
    const user = await User.findById(decoded._id).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, error: "User Not Found" });
    }

    // Attach user to the request object for further use
    req.user = user;
    next();
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ success: false, error: "Server Side Error" });
  }
};

export default verifyToken;
