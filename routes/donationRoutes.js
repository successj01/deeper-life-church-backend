import express from "express";

import {
  createDonation,
  getDonations,
  getDonation,
  updateDonation,
  deleteDonation,
} from "../controllers/donationController.js";


const router = express.Router();


// Create Donation
router.post("/", createDonation);


// Donation History
router.get("/", getDonations);

router.get("/history", getDonations);


// Get Single Donation
router.get("/:id", getDonation);


// Update Donation
router.put("/:id", updateDonation);


// Delete Donation
router.delete("/:id", deleteDonation);


export default router;