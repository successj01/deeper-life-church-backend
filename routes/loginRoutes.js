import express from "express";
import { login } from "../controllers/authController.js";
import { register } from "../controllers/contactController.js";

const router = express.Router();

// Register
router.post("/register", register);

// Login
router.post("/", login);

export default router;