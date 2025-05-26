const express = require('express');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();
const authRoutes = require('./routes/auth');

const app = express();

// Debug logging
const logStream = fs.createWriteStream('server.log', { flags: 'a' });
console.log = (...args) => {
  logStream.write(`[LOG] ${args.join(' ')}\n`);
  process.stdout.write(args.join(' ') + '\n');
};
console.error = (...args) => {
  logStream.write(`[ERROR] ${args.join(' ')}\n`);
  process.stderr.write(args.join(' ') + '\n');
};

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', authRoutes);

// Default GET route
app.get('/', (req, res) => {
  res.send('Server is running. Use POST /api/signup or /api/login.');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
