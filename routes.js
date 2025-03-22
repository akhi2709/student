const express = require("express");
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require("./control");

const router = express.Router();

router.post("/", createUser);  // Add user
router.get("/", getUsers);     // Get all users
router.get("/:id", getUserById); // Get user by ID
router.put("/:id", updateUser);  // Update user
router.delete("/:id", deleteUser); // Delete user

module.exports = router;
