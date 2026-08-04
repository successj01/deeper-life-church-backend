import express from "express";
import { getDashboard } from "../controllers/dashboardController.js";

const router = express.Router();

// Dashboard Statistics
router.get("/", getDashboard);

export default router;