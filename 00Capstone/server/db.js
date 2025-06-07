const mysql = require("mysql2/promise"); // 👈 NOTE: use 'promise' import
require("dotenv").config();

// Create a promise-based pool for async/await compatibility
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = db;




// const mysql = require("mysql2");
// require("dotenv").config();

// // establish 'db' as MySQL connection --> pulled from .env 
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
// });

// db.connect((err) => {
//   if (err) {
//     console.error("!ERROR! Database connection failed:", err);
//     process.exit(1);                                                // stop server if database doesn't connect
//   }
//   console.log("!SUCCESS! Connected to MySQL database.");
// });

// module.exports = db;
