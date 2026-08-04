import express from "express";

import {
  createGallery,
  getGallery,
  getGalleryImage,
  deleteGallery,
} from "../controllers/galleryController.js";

const router = express.Router();


// Add Gallery Image
router.post("/", createGallery);


// Get All Gallery Images
router.get("/", getGallery);


// Get Single Gallery Image
router.get("/:id", getGalleryImage);


// Delete Gallery Image
router.delete("/:id", deleteGallery);


export default router;