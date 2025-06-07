require("dotenv").config(); // ✅ Load environment variables
const mysql = require("mysql2/promise");
const { format } = require("date-fns");

async function main() {
  const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  // Store-to-teacher mapping
  const storeToTeachers = {
    1: [1, 2, 3], // Store001
    2: [4, 5, 6], // Store002
    3: [7, 8, 9], // Store003
  };

  // Dummy lesson generator
  async function createLesson({ teacher_id, store_id, instrument_id, date, start_time, end_time }) {
    await db.query(
      `INSERT INTO lessons (teacher_id, store_id, instrument_id, date, start_time, end_time, status)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [teacher_id, store_id, instrument_id, date, start_time, end_time, "Available"]
    );
  }

  async function seedLessons() {
    const instrumentId = 1; // 🔧 adjust or randomize later
    const today = new Date();

    for (const [storeId, teacherIds] of Object.entries(storeToTeachers)) {
      for (const teacherId of teacherIds) {
        for (let i = 0; i < 5; i++) {
          const date = format(new Date(today.getTime() + i * 86400000), "yyyy-MM-dd");

          for (let h = 9; h < 17; h++) {
            for (let m = 0; m < 60; m += 30) {
              const hourStr = h.toString().padStart(2, "0");
              const minStr = m.toString().padStart(2, "0");
              const startTime = `${hourStr}:${minStr}:00`;
              const endTime =
                m === 0
                  ? `${hourStr}:30:00`
                  : `${(h + 1).toString().padStart(2, "0")}:00:00`;

              await createLesson({
                teacher_id: teacherId,
                store_id: parseInt(storeId),
                instrument_id: instrumentId,
                date,
                start_time: startTime,
                end_time: endTime,
              });
            }
          }
        }
      }
    }
  }

  await seedLessons();
  console.log("✅ Dummy lessons generated.");
  process.exit(0);
}

main().catch((err) => {
  console.error("❌ Error generating dummy data:", err);
  process.exit(1);
});
