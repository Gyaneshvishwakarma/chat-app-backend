const message = await Message.create({ chat: chatId, sender: req.userId, content });

const fullMessage = await message.populate("sender", "name");
await fullMessage.populate("chat");
await fullMessage.populate({
  path: "chat.users",
  select: "name email",
});

io.to(chatId).emit("newMessage", fullMessage);
