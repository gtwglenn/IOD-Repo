
const express = require("express");
const router = express.Router();
const db = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// POST /api/create-account
router.post("/create-account", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const checkSql = "SELECT * FROM users WHERE email = ?";
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
      const username = `${firstName} ${lastName}`.trim();

      const insertSql = "INSERT INTO users (firstName, lastName, email, password, username) VALUES (?, ?, ?, ?, ?)";
      db.query(insertSql, [firstName, lastName, email, hashedPassword, username], (err, result) => {
        if (err) {
          console.error("Account creation error:", err);
          return res.status(500).json({ message: "Failed to create account." });
        }

        const user = { id: result.insertId, email };
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({ user, token });
      });
    } catch (err) {
      console.error("Password hashing error:", err);
      res.status(500).json({ message: "Server error during account creation." });
    }
  });
});

// POST /api/update-profile
// router.post("/update-profile", authenticateToken, (req, res) => {
//   const { instrument, role, storeLocation } = req.body;
//   const userId = req.user.id;

//   if (!instrument || !role) {
//     return res.status(400).json({ message: "Instrument and role are required." });
//   }

//   let sql = "UPDATE users SET instrument = ?, role = ?";
//   const params = [instrument, role];

//   if (role === "Teacher" || role === "Employee") {
//     if (!storeLocation) {
//       return res.status(400).json({ message: "Store location is required for this role." });
//     }
//     sql += ", storeLocation = ?";
//     params.push(storeLocation);
//   }

//   sql += " WHERE id = ?";
//   params.push(userId);

//   db.query(sql, params, (err, results) => {
//     if (err) {
//       console.error("Error updating profile:", err);
//       return res.status(500).json({ message: "Failed to update profile." });
//     }

//     db.query("SELECT * FROM users WHERE id = ?", [userId], (err2, results) => {
//       if (err2) {
//         console.error("Fetch updated user failed:", err2);
//         return res.status(500).json({ message: "Failed to retrieve updated user." });
//       }

//       res.status(200).json({
//         message: "Profile updated successfully.",
//         updatedUser: results[0]
//       });
//     });
//   });
// });

router.post("/update-profile", authenticateToken, (req, res) => {
  const { instrument, role, storeLocation, firstName, lastName } = req.body;
  const userId = req.user.id;

  if (!instrument || !role || !firstName || !lastName) {
    return res.status(400).json({ message: "Instrument, role, first name, and last name are required." });
  }

  let sql = "UPDATE users SET instrument = ?, role = ?, firstName = ?, lastName = ?";
  const params = [instrument, role, firstName, lastName];

  if (role === "Teacher" || role === "Employee") {
    if (!storeLocation) {
      return res.status(400).json({ message: "Store location is required for this role." });
    }
    sql += ", storeLocation = ?";
    params.push(storeLocation);
  }

  sql += " WHERE id = ?";
  params.push(userId);

  db.query(sql, params, (err, results) => {
    if (err) {
      console.error("Error updating profile:", err);
      return res.status(500).json({ message: "Failed to update profile." });
    }

    db.query("SELECT * FROM users WHERE id = ?", [userId], (err2, results2) => {
      if (err2) {
        console.error("Fetch updated user failed:", err2);
        return res.status(500).json({ message: "Failed to retrieve updated user." });
      }

      res.status(200).json({
        message: "Profile updated successfully.",
        updatedUser: results2[0]
      });
    });
  });
});


// GET /api/user-data
router.get("/user-data", authenticateToken, (req, res) => {
  const userId = req.user.id;
  console.log("🔍 Looking up user ID from token:", userId);

  db.query("SELECT * FROM users WHERE id = ?", [userId], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (results.length === 0) {
      console.warn("❌ No user found for ID:", userId);
      return res.status(404).json({ message: "User not found" });
    }

    res.json(results[0]);
  });
});

module.exports = router;
