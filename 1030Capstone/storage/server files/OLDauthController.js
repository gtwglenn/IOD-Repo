const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../../server/models"); // Sequelize model

const db = require('../models/db');



exports.signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into DB
    const sql = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
    db.query(sql, [firstName, lastName, email, hashedPassword], (err, results) => {
      if (err) {
        console.error(err);
        return res.json({ success: false, message: "User creation failed." });
      }

      const newUser = { id: results.insertId, firstName, lastName, email };
      // Return mock token for now
      res.json({ success: true, user: newUser, token: "mock-token" });
    });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "Internal server error." });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
