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


router.get("/teachers", (req, res) => {
  const storeId = req.query.storeId;
  
  let sql, params;
  if (storeId) {
    sql = `
      SELECT u.id, u.firstName, u.lastName, u.instrument, u.storeLocation, s.name as storeName
      FROM users u
      JOIN stores s ON u.storeLocation = s.store_code
      WHERE u.role = 'Teacher' AND s.id = ?
    `;
    params = [storeId];
  } else {
    sql = "SELECT id, firstName, lastName, instrument, storeLocation FROM users WHERE role = 'Teacher'";
    params = [];
  }
  
  db.query(sql, params, (err, results) => {
    if (err) {
      console.error("❌ DB error:", err);
      return res.status(500).json({ message: "DB error", error: err.message });
    }
    console.log("✅ Found teachers:", results);
    res.json(results);
  });
});



module.exports = router;
