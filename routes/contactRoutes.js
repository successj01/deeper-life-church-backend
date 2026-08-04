import express from "express";
import {
  createContact,
  getContacts,
  getContact,
  deleteContact,
} from "../controllers/contactController.js";

const router = express.Router();

// Send Contact Message
router.post("/", createContact);

// Get All Contact Messages
router.get("/", getContacts);

// Get Single Contact Message
router.get("/:id", getContact);

// Delete Contact Message
router.delete("/:id", deleteContact);

export default router;