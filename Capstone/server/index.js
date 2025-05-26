const express = require('express');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');

const app = express();

// 🔧 Setup CORS BEFORE routes
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// 🛡️ Optional: Preflight support
app.options("*", cors());

app.use(express.json());

// 📜 Debug logging
const logStream = fs.createWriteStream('server.log', { flags: 'a' });
console.log = (...args) => {
  logStream.write(`[LOG] ${args.join(' ')}\n`);
  process.stdout.write(args.join(' ') + '\n');
};
console.error = (...args) => {
  logStream.write(`[ERROR] ${args.join(' ')}\n`);
  process.stderr.write(args.join(' ') + '\n');
};


// try {
//   app.use("/api", authRoutes);
//   app.use("/api", userRoutes);
// } catch (err) {
//   console.error("❌ Route registration failed:", err);
// }




// 🔌 Routes (AFTER CORS and middleware)
app.use("/api", authRoutes);
app.use("/api", userRoutes);

// 🏠 Default route
app.get('/', (req, res) => {
  res.send('Server is running. Use POST /api/signup or /api/login.');
});

// 🚀 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
