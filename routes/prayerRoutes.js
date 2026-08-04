import express from "express";

import {
  createPrayerRequest,
  getPrayerRequests,
  getPrayerRequest,
  updatePrayerStatus,
  deletePrayerRequest,
} from "../controllers/prayerController.js";


const router = express.Router();


// Submit Prayer Request
router.post("/", createPrayerRequest);


// Get All Prayer Requests
router.get("/", getPrayerRequests);


// Get Single Prayer Request
router.get("/:id", getPrayerRequest);


// Update Prayer Status
router.put("/:id", updatePrayerStatus);


// Delete Prayer Request
router.delete("/:id", deletePrayerRequest);


export default router;