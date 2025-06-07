
const mysql = require("mysql2/promise");
require("dotenv").config();

// create promise-based pool instead of a single connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;






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
