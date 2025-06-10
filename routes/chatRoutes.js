// backend/routes/chatRoutes.js

const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");
const authMiddleware = require("../middleware/authMiddleware");

// Get chat messages between logged-in user and another user
router.get("/:receiverId", authMiddleware, chatController.getMessages);

// Send a new message
router.post("/send", authMiddleware, chatController.sendMessage);

module.exports = router;
