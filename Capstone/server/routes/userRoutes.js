const express = require("express");
const router = express.Router();
const db = require("../db"); // adjust this path as needed
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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

// ✅ POST /api/create-account
router.post("/create-account", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Check if user already exists
  const checkSql = `SELECT * FROM users WHERE email = ?`;
  db.query(checkSql, [email], async (err, results) => {
    if (err) {
      console.error("Email check error:", err);
      return res.status(500).json({ message: "Database error." });
    }

    if (results.length > 0) {
      return res.status(409).json({ message: "User with this email already exists." });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const username = `${firstName} ${lastName}`.trim(); // 👈 required by schema

      const insertSql = `
        INSERT INTO users (first_name, last_name, email, password, username)
        VALUES (?, ?, ?, ?, ?)
      `;

      db.query(insertSql, [firstName, lastName, email, hashedPassword, username], (err, result) => {
        if (err) {
          console.error("Account creation error:", err);
          return res.status(500).json({ message: "Failed to create account." });
        }

        const user = {
          id: result.insertId,
          email,
        };

        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({ user, token });
      });
    } catch (err) {
      console.error("Password hashing error:", err);
      res.status(500).json({ message: "Server error during account creation." });
    }
  });
});

// ✅ POST /api/update-profile
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

// ✅ GET /api/user-data
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






// router.post("/create-account", (req, res) => {
//   const { firstName, lastName, email } = req.body;

//   const sql = `INSERT INTO users (firstName, lastName, email) VALUES (?, ?, ?)`;

//   db.query(sql, [firstName, lastName, email], (err, result) => {
//     if (err) {
//       console.error("Account creation error:", err);
//       return res.status(500).json({ message: "Failed to create account." });
//     }

//     const userId = result.insertId;
//     const user = { id: userId, email };

//     // ✅ Sign JWT token with user id and email
//     const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.json({ user, token });
//   });
// });