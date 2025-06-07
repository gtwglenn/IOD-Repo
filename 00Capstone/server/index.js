const express = require('express');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();


// FOR APP.USE --> SCROLL DOWN JUST BECAUSE 
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');

const scheduleRoutes = require('./routes/scheduleRoutes');
const lessonRoutes = require("./routes/lessonRoutes");



const app = express();


// Setup CORS BEFORE routes
app.use(cors({
  origin: "http://localhost:5173",                        // note: not localhost:5000; 5000 is the server port 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// helpful robot recommendation 
app.options("*", cors());

app.use(express.json());



// debug --> see: server.log in directory files 
const logStream = fs.createWriteStream('server.log', { flags: 'a' });
console.log = (...args) => {
  logStream.write(`[LOG] ${args.join(' ')}\n`);
  process.stdout.write(args.join(' ') + '\n');
};
console.error = (...args) => {
  logStream.write(`[ERROR] ${args.join(' ')}\n`);
  process.stderr.write(args.join(' ') + '\n');
};


// ROUTES -- move to after CORS and middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", scheduleRoutes);
app.use("/api/lessons", lessonRoutes);

// default route 
app.get('/', (req, res) => {
  res.send('Server is running. Use POST /api/signup or /api/login.');
});

// start server
const PORT = process.env.PORT || 5000;
//const PORT = 5000; 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
