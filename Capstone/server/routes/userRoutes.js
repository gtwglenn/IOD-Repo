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

            // USERNAME CREATED: firstName + lastName 
      const username = `${firstName} ${lastName}`.trim();

      // Only inserting the fields we currently have — storeLocation is not part of account creation
      const insertSql = `
        INSERT INTO users (firstName, lastName, email, password, username)
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
  const { instrument, role, storeLocation } = req.body;
  const userId = req.user.id;

  if (!instrument || !role) {
    return res.status(400).json({ message: "Instrument and role are required." });
  }

  // Base SQL and params
  let sql = `UPDATE users SET instrument = ?, role = ?`;
  const params = [instrument, role];

  // Only include storeLocation if role requires it
  if (role === "Teacher" || role === "Employee") {
    if (!storeLocation) {
      return res.status(400).json({ message: "Store location is required for this role." });
    }
    sql += `, storeLocation = ?`;
    params.push(storeLocation);
  }

  sql += ` WHERE id = ?`;
  params.push(userId);

  db.query(sql, params, (err, results) => {
    if (err) {
      console.error("Error updating profile:", err);
      return res.status(500).json({ message: "Failed to update profile." });
    }

    res.status(200).json({ message: "Profile updated successfully." });
  });
});


// GET /api/user-data
router.get("/user-data", authenticateToken, (req, res) => {
  const userId = req.user.id;

  const sql = "SELECT * FROM users WHERE id = ?";
  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(results[0]); // send user data
  });
});


module.exports = router;






//      WORKING AS OF TUESDAY 

// router.post("/create-account", async (req, res) => {
//   const { firstName, lastName, email, password, storeLocation } = req.body;

//   if (!firstName || !lastName || !email || !password) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   // Check if user already exists
//   const checkSql = `SELECT * FROM users WHERE email = ?`;
//   db.query(checkSql, [email], async (err, results) => {
//     if (err) {
//       console.error("Email check error:", err);
//       return res.status(500).json({ message: "Database error." });
//     }

//     if (results.length > 0) {
//       return res.status(409).json({ message: "User with this email already exists." });
//     }

//     try {
//       const hashedPassword = await bcrypt.hash(password, 10);
//       const username = `${firstName} ${lastName}`.trim(); // 👈 required by schema

//       const insertSql = `
//         INSERT INTO users (first_name, last_name, email, password, username)
//         VALUES (?, ?, ?, ?, ?)
//       `;

//       db.query(insertSql, [firstName, lastName, email, hashedPassword, username], (err, result) => {
//         if (err) {
//           console.error("Account creation error:", err);
//           return res.status(500).json({ message: "Failed to create account." });
//         }

//         const user = {
//           id: result.insertId,
//           email,
//         };

//         const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });

//         res.status(201).json({ user, token });
//       });
//     } catch (err) {
//       console.error("Password hashing error:", err);
//       res.status(500).json({ message: "Server error during account creation." });
//     }
//   });
// });


// router.post("/update-profile", authenticateToken, (req, res) => {
//   const { instrument, role } = req.body;
//   const userId = req.user.id;

//   if (!instrument || !role) {
//     return res.status(400).json({ message: "Instrument and role are required." });
//   }

//   const sql = `UPDATE users SET instrument = ?, role = ? WHERE id = ?`;

//   db.query(sql, [instrument, role, userId], (err, results) => {
//     if (err) {
//       console.error("Database update error:", err);
//       return res.status(500).json({ message: "Failed to update profile." });
//     }

//     res.json({ message: "Profile updated successfully." });
//   });
// });





































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