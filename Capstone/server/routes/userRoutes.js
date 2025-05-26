const express = require("express");
const router = express.Router();
const db = require("../db"); // adjust this path as needed
const jwt = require("jsonwebtoken");

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user; // Contains user data like id or email
    next();
  });
}

// POST /api/update-profile
router.post("/update-profile", authenticateToken, (req, res) => {
  const { instrument, role } = req.body;
  const userId = req.user.id;

  if (!instrument || !role) {
    return res.status(400).json({ message: "Instrument and role are required." });
  }

  const sql = `UPDATE users SET instrument = ?, role = ? WHERE id = ?`;

  db.query(sql, [instrument, role, userId], (err, results) => {
    if (err) {
      console.error("Database update error:", err);
      return res.status(500).json({ message: "Failed to update profile." });
    }

    res.json({ message: "Profile updated successfully." });
  });
});

router.get("/user-data", authenticateToken, (req, res) => {
  const userId = req.user.id;

  const sql = "SELECT id, username, email, instrument, role FROM users WHERE id = ?";
  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error("Error fetching user data:", err);
      return res.status(500).json({ message: "Error retrieving user data." });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "User not found." });
    }

    res.json(results[0]); // return the user object
  });
});

module.exports = router;
