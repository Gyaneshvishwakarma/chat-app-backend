// backend/controllers/chatController.js

const Message = require("../models/Message");

// Get messages between logged-in user and a receiver
exports.getMessages = async (req, res) => {
  try {
    const userId = req.user.id; // from auth middleware
    const receiverId = req.params.receiverId;

    const messages = await Message.find({
      $or: [
        { sender: userId, receiver: receiverId },
        { sender: receiverId, receiver: userId },
      ],
    })
      .sort({ createdAt: 1 }) // oldest first
      .populate("sender", "name email")
      .populate("receiver", "name email");

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Failed to get messages", error: error.message });
  }
};

// Send a new message
exports.sendMessage = async (req, res) => {
  try {
    const sender = req.user.id; // from auth middleware
    const { receiver, message } = req.body;

    const newMessage = await Message.create({
      sender,
      receiver,
      message,
    });

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: "Failed to send message", error: error.message });
  }
};
