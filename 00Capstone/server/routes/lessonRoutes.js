const express = require("express");
const router = express.Router();
const db = require("../db");

// GET lessons by store+date OR studentId
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
  } else if (studentId) {
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
  } else {
    return res.status(400).json({ message: "Missing query parameters" });
  }
});

// POST: Create a new lesson
// POST: Create a new lesson
router.post("/", async (req, res) => {
  const { teacher_id, store_id, student_id, start_time } = req.body;

  if (!teacher_id || !store_id || !start_time || !student_id) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Ensure teacher belongs to the selected store
    const [rows] = await db.query(
      "SELECT * FROM teachers WHERE id = ? AND store_id = ?",
      [teacher_id, store_id]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "Invalid teacher-store relationship" });
    }

    const dateOnly = start_time.split(" ")[0];

    const [result] = await db.query(
      "INSERT INTO lessons (teacher_id, store_id, student_id, start_time, date) VALUES (?, ?, ?, ?, ?)",
      [teacher_id, store_id, student_id, start_time, dateOnly]
    );

    const [newLesson] = await db.query(
      "SELECT * FROM lessons WHERE id = ?",
      [result.insertId]
    );

    res.status(201).json(newLesson[0]);
  } catch (err) {
    console.error("❌ Failed to insert lesson:", err);
    res.status(500).json({ message: "Server error creating lesson" });
  }
});



// DELETE: Cancel a lesson
router.delete("/:id", async (req, res) => {
  const lessonId = req.params.id;

  try {
    await db.query("DELETE FROM lessons WHERE id = ?", [lessonId]);
    res.json({ message: "Lesson cancelled" });
  } catch (err) {
    console.error("❌ Failed to delete lesson:", err);
    res.status(500).json({ message: "Server error deleting lesson" });
  }
});

module.exports = router;
