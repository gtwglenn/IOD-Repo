const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post('/signup', authController.signup);

router.post("/login", authController.login);

// router.post('/signup', async (req, res) => {
//   const { firstName, lastName, email, password } = req.body;

//   const username = `${firstName} ${lastName}`.trim();

//   try {
//     const [existingUsers] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

//     if (existingUsers.length > 0) {
//       return res.status(400).json({ message: 'User with that email already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     await db.query(
//       'INSERT INTO users (first_name, last_name, username, password, email) VALUES (?, ?, ?, ?, ?)',
//       [firstName, lastName, username, hashedPassword, email]
//     );

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     console.error("Signup error:", err);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });


module.exports = router;
