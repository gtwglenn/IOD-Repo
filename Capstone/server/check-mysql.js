// check-mysql.js

// MAYBE DELETE -- USED FOR TROUBLESHOOTING MYSQL 
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "youruser",
  password: "IoDApp123!",         // change to null value --> pull from .env (good practice for data integrity)
  database: "yourdatabase",
});

connection.connect((err) => {
  if (err) {
    console.error("!ERROR! MySQL not running or connection failed:", err.message);
    process.exit(1);
  } else {
    console.log("!SUCCESS! MySQL is running.");
    connection.end();
    process.exit(0);
  }
});


// or --> package.json: "start: "net start MySQL && node index.js"



// changes for GIT commit 