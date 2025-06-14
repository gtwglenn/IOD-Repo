const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2/promise");

// database pool 
const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "user_auth_db",
});

// SIGNUP
exports.signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const username = `${firstName} ${lastName}`.trim();

  console.log("Received signup data", req.body)

  try {
    const [existingUsers] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (existingUsers.length > 0) {
      return res.status(400).json({ message: "User with that email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO users (firstName, lastName, username, password, email) VALUES (?, ?, ?, ?, ?)",
      [firstName, lastName, username, hashedPassword, email]
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;
  //const { user.id, email } = req.body;  

  try {
    const [results] = await db.query(
      // "SELECT * FROM users WHERE id = ?",
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName, 
        storeLocation: user.storeLocation
      },
      token,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// could edit //SIGNUP and //LOGIN --> change user properties in schema 


// changes for GIT commit 