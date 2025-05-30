const express = require("express");
const router = express.Router();
const db = require("../db");

// GET /api/lessons?studentId=123
router.get("/", (req, res) => {
  const studentId = req.query.studentId;

  if (!studentId) {
    return res.status(400).json({ message: "Missing studentId" });
  }

  const sql = 
    `SELECT
      l.id,
      l.teacher_id,
      CONCAT(t.firstName, ' ', t.lastName) AS teacherName,
      l.instrument_id,
      i.name AS instrumentName,
      l.date,
      l.start_time,
      l.end_time
    FROM lessons l
    JOIN teachers t ON l.teacher_id = t.id
    JOIN instruments i ON l.instrument_id = i.id
    WHERE l.student_id = ?
    ORDER BY l.date, l.start_time;`
  ;

  db.query(sql, [studentId], (err, results) => {
    if (err) {
      console.error("[!error! Lesson fetch error]", err);
      return res.status(500).json({ message: "Failed to fetch lessons" });
    }

    res.json(results);
  });
});

module.exports = router;
