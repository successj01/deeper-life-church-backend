import express from "express";

import {
  createSermon,
  getSermons,
  getSermon,
  updateSermon,
  deleteSermon,
} from "../controllers/sermonController.js";


const router = express.Router();


// Get all sermons
router.get("/", getSermons);


// Create sermon
router.post("/", createSermon);


// Get single sermon
router.get("/:id", getSermon);


// Update sermon
router.put("/:id", updateSermon);


// Delete sermon
router.delete("/:id", deleteSermon);


export default router;