// check-mysql.js
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "youruser",
  password: "IoDApp123!",
  database: "yourdatabase",
});

connection.connect((err) => {
  if (err) {
    console.error("❌ MySQL not running or connection failed:", err.message);
    process.exit(1);
  } else {
    console.log("✅ MySQL is running.");
    connection.end();
    process.exit(0);
  }
});


// or --> package.json: "start: "net start MySQL && node index.js"



// changes for GIT commit 