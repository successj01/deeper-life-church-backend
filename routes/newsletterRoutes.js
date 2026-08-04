import express from "express";

import {
  subscribeNewsletter,
  getSubscribers,
  deleteSubscriber,
} from "../controllers/newsletterController.js";


const router = express.Router();


// Subscribe Email
router.post("/", subscribeNewsletter);


// Get All Subscribers (Admin)
router.get("/", getSubscribers);


// Delete Subscriber
router.delete("/:id", deleteSubscriber);


export default router;