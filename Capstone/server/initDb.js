// initDb.js

// startup script: npm run init-db --> node initDb.js 

const fs = require("fs");
const path = require("path");
const mysql = require("mysql2");
require("dotenv").config();

// load the schema.sql file
const schemaPath = path.join(__dirname, "schema.sql");
const schemaSql = fs.readFileSync(schemaPath, "utf8");

// Create a connection *without specifying the database yet*
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  multipleStatements: true,                       // important for executing multiple SQL commands
});

connection.connect((err) => {
  if (err) {
    console.error("!ERROR! Cannot connect to MySQL:", err);
    return;
  }

  console.log("!SUCCESS! Connected to MySQL. Running schema...");

  connection.query(schemaSql, (err, results) => {
    if (err) {
      console.error("!ERROR! Error running schema.sql:", err);
    } else {
      console.log("!SUCCESS! Database initialized successfully.");
    }

    connection.end();
  });
});



// changes for GIT commit 