import express from "express";

import {
  getUsers,
  getUser,
  deleteUser,
} from "../controllers/userController.js";


const router = express.Router();


// Get all users
router.get("/", getUsers);


// Get single user
router.get("/:id", getUser);


// Delete user
router.delete("/:id", deleteUser);


export default router;