const express = require("express");
const router = express.Router();
const db = require("../db");

// GET lessons for a specific store and date
router.get("/", (req, res) => {
  const { storeId, date, studentId } = req.query;

  if (storeId && date) {
    const sql = `
      SELECT 
        l.id, l.teacher_id, l.student_id, l.instrument_id,
        l.date, l.start_time, l.end_time, l.status,
        CONCAT(t.firstName, ' ', t.lastName) AS teacherName,
        i.name AS instrumentName
      FROM lessons l
      JOIN teachers t ON l.teacher_id = t.id
      JOIN instruments i ON l.instrument_id = i.id
      WHERE l.store_id = ? AND l.date = ?
      ORDER BY l.start_time;
    `;

    db.query(sql, [storeId, date], (err, results) => {
      if (err) {
        console.error("❌ Error fetching lessons by store/date:", err);
        return res.status(500).json({ message: "DB error", error: err.message });
      }
      res.json(results);
    });
  }

  // fallback: get lessons for a student
  else if (studentId) {
    const sql = `
      SELECT
        l.id, l.teacher_id, l.date, l.start_time, l.end_time, l.status,
        CONCAT(t.firstName, ' ', t.lastName) AS teacherName,
        i.name AS instrumentName
      FROM lessons l
      JOIN teachers t ON l.teacher_id = t.id
      JOIN instruments i ON l.instrument_id = i.id
      WHERE l.student_id = ?
      ORDER BY l.date, l.start_time;
    `;

    db.query(sql, [studentId], (err, results) => {
      if (err) {
        console.error("❌ Error fetching lessons by studentId:", err);
        return res.status(500).json({ message: "DB error", error: err.message });
      }
      res.json(results);
    });
  }

  // If no valid params
  else {
    return res.status(400).json({ message: "Missing query parameters" });
  }
});

module.exports = router;
