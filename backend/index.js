const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Hardcoded admin credentials
const ADMIN_CREDENTIALS = { username: "admin", password: "admin@1" };

// Login endpoint
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    return res.status(200).json({ message: "Login successful" });
  }
  return res.status(401).json({ message: "Invalid credentials" });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
