import express from "express";
import { loginAuth, verify } from "../controllers/loginController.js"; // Fixed typo here
import verifyToken from "../middleware/authMiddleWare.js";

const router = express.Router();

// Route for login
router.post("/login", loginAuth);

// Route for token verification, using the middleware to verify the token
router.get("/verify", verifyToken, verify); // This route requires the user to be authenticated

export default router;
