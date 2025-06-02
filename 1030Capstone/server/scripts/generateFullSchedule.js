const db = require("../db").promise();
const { format } = require("date-fns");

const START_DATE = new Date("2025-05-30");
const END_DATE = new Date("2025-06-07");
const START_HOUR = 9;
const END_HOUR = 17;
const SLOT_DURATION_MINUTES = 30;

const generateSchedule = async () => {
  try {
    const [teachers] = await db.query(
      "SELECT id, store_id, instrument_id FROM teachers"
    );

    const lessonInserts = [];
    let currentDate = new Date(START_DATE);

    while (currentDate <= END_DATE) {
      for (let hour = START_HOUR; hour < END_HOUR; hour++) {
        for (
          let min = 0;
          min < 60;
          min += SLOT_DURATION_MINUTES
        ) {
          const startTime = `${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}:00`;
          const endMin = min + SLOT_DURATION_MINUTES;
          const endHour = endMin >= 60 ? hour + 1 : hour;
          const endTime = `${String(endHour).padStart(2, "0")}:${String(
            endMin % 60
          ).padStart(2, "0")}:00`;

          for (const teacher of teachers) {
            lessonInserts.push([
              teacher.id,
              null,
              teacher.store_id,
              teacher.instrument_id,
              format(currentDate, "yyyy-MM-dd"),
              startTime,
              endTime,
              "available",
            ]);
          }
        }
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    await db.query(
      `INSERT INTO lessons 
      (teacher_id, student_id, store_id, instrument_id, date, start_time, end_time, status)
      VALUES ?`,
      [lessonInserts]
    );

    console.log("✅ Lessons seeded successfully.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error generating schedule:", err);
    process.exit(1);
  }
};

generateSchedule();
