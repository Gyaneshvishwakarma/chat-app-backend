// backend/routes/authRoutes.js

const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Register new user
router.post("/register", authController.register);

// Login user
router.post("/login", authController.login);

// Get all users (protected route)
router.get("/users", authMiddleware, authController.getUsers);

module.exports = router;
