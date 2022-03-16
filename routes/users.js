import express from "express";

const router = express.Router();

// Import the user controllers
import { loginUser } from "../controllers/login.js";
import { registerUser } from "../controllers/register.js";
import { userProfile } from "../controllers/profile.js";
import { authorizedRoutes } from "../auth/auth.js";

// User register end points
router.post("/register", registerUser);

// User login end points
router.post("/login", loginUser);

// User fetch profile details end point
router.get("/profile", authorizedRoutes, userProfile);

export default router;
