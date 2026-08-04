import express from "express";

import {
  createAnnouncement,
  getAnnouncements,
  getAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from "../controllers/announcementController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

const router = express.Router();


// Create announcement
router.post("/", createAnnouncement);


// Get all announcements
router.get("/", getAnnouncements);


// Get single announcement
router.get("/:id", getAnnouncement);


// Update announcement
router.put("/:id", updateAnnouncement);


// Delete announcement
router.delete("/:id", deleteAnnouncement);


export default router;