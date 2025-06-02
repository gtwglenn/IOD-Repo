const express = require("express");
const router = express.Router();
const db = require("../db"); 

// GET /api/stores
router.get("/stores", (req, res) => {
  // const req = "SELECT id, name FROM stores";
  const sql = "SELECT id, name FROM stores";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching stores:", err);
      //console.log("Error fetching stores", err);
      return res.status(500).json({ message: "Error fetching stores" });
    }
    res.json(results);
  });

});

// GET /api/instruments
router.get("/instruments", (req, res) => {
  const sql = "SELECT id, name FROM instruments";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching instruments:", err);
      return res.status(500).json({ message: "Error fetching instruments" });
    }
    res.json(results);
  });
});

// GET /api/teachers
router.get("/teachers", (req, res) => {
  const storeId = req.query.storeId;

  if (!storeId) {
    return res.status(400).json({ message: "Missing storeId" });
  }

  const storeCodes = {
    1: "Store001",
    2: "Store002",
    3: "Store003"
  };

  const storeCode = storeCodes[storeId];

  if (!storeCode) {
    return res.status(400).json({ message: "Invalid storeId" });
  }

  const sql = `
    SELECT u.id, u.firstName, u.lastName, u.instrument, u.storeLocation
    FROM users u
    WHERE u.role = 'Teacher' AND u.storeLocation = ?
  `;

  db.query(sql, [storeCode], (err, results) => {
    if (err) {
      console.error("❌ DB error:", err);
      return res.status(500).json({ message: "DB error", error: err.message });
    }
    console.log("✅ Found teachers for", storeCode, results);
    res.json(results);
  });
});




module.exports = router;
