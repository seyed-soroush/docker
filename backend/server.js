const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Simple API endpoints
app.get("/api/status", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend is running!",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];
  res.json(users);
});

app.post("/api/echo", (req, res) => {
  res.json({
    echo: req.body,
    receivedAt: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
