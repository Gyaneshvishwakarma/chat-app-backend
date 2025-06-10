# 💬 Chat App Frontend

This is the **frontend** for a real-time chat application built using **React**, **Tailwind CSS**, and **Axios**. It connects with the [Chat App Backend](../backend/README.md) via REST APIs and supports real-time messaging.

---

## 🚀 Features

- 🔐 User Registration & Login (JWT based)
- 📬 Real-time messaging UI
- 🌙 Modern Tailwind CSS-based design
- 👤 Auth state managed with Context API
- 🔄 Auto-refresh and message loading

---

## 📁 Project Structure

chat-app-frontend/
├── public/
├── src/
│ ├── api/
│ │ └── axios.js
│ ├── components/
│ ├── context/
│ │ └── UserContext.js
│ ├── pages/
│ │ ├── Chat.js
│ │ ├── Login.js
│ │ └── Register.js
│ ├── App.js
│ ├── index.css
│ └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── .env

yaml
Copy
Edit

---

## 🌐 Live Demo

> Coming Soon (you can host it on [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/))

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app/chat-app-frontend
2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure Environment Variables
Create a .env file:

env
Copy
Edit
VITE_API_URL=http://localhost:5000
Make sure the backend is running at this URL.

4. Start the React App
bash
Copy
Edit
npm run dev