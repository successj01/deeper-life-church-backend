import express from "express";

import {
  createMinistry,
  getMinistries,
  getMinistry,
  updateMinistry,
  deleteMinistry,
} from "../controllers/ministryController.js";


const router = express.Router();


// Create Ministry
router.post("/", createMinistry);


// Get All Ministries
router.get("/", getMinistries);


// Get Single Ministry
router.get("/:id", getMinistry);


// Update Ministry
router.put("/:id", updateMinistry);


// Delete Ministry
router.delete("/:id", deleteMinistry);


export default router;