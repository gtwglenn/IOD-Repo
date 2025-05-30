const mysql = require("mysql2");
const { format, addDays } = require("date-fns");


// CONNECT TO DATABASE 
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  //password: "",           pull password from .env file --> try this later after everything 
  password: "IoDApp123!", 
  database: "yourdatabase",
});

// variables for timesheet --> ScheduleView()
// now formatted in military time ??? 
const startHour = 9;
const endHour = 17;
const slotDurationMinutes = 30;
const numberOfDays = 7;
const today = new Date();

// status of timesheet blocks --> should become interactive in ScheduleView() (MySchedule page)
const statuses = ["booked", "pending", "available", "unavailable"];

const getTimeSlots = () => {
  const slots = [];
  for (let hour = startHour; hour < endHour; hour++) {

        // TAKE NOTES ON THIS PART -- slots are only supposed to be 30 min, so wtf slotDurationMinutes? shouldn't this be static (30min)? 
    for (let minute = 0; minute < 60; minute += slotDurationMinutes) {
      const start = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`;
        // WTF IS THIS ROBOT MATH??? hour = start time; so you could just take hour + 30min to get end time? ????????
      const endHourCalc = hour + Math.floor((minute + slotDurationMinutes) / 60);
      const endMinute = (minute + slotDurationMinutes) % 60;
      const end = `${String(endHourCalc).padStart(2, "0")}:${String(endMinute).padStart(2, "0")}:00`;
      slots.push({ start, end });
    }
  }
  return slots;
};

// lesson validation w/ database 
const lessonExists = (teacherId, date, startTime) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT id FROM lessons WHERE teacher_id = ? AND date = ? AND start_time = ?`;
    db.query(sql, [teacherId, date, startTime], (err, results) => {
      if (err) return reject(err);
      resolve(results.length > 0);
    });
  });
};

// adding new lessons to lessons table for ViewSchedule() to render on MyProfile page 
const insertLesson = (teacherId, storeId, instrumentId, date, start, end, status) => {
  return new Promise((resolve, reject) => {
    const sql = `
      INSERT INTO lessons
      (teacher_id, student_id, store_id, instrument_id, date, start_time, end_time, status)
      VALUES (?, NULL, ?, ?, ?, ?, ?, ?)
    `;
    db.query(sql, [teacherId, storeId, instrumentId, date, start, end, status], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

// lookup instrument id number by instrument name
const getInstrumentIdByName = (instrumentName) => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT id FROM instruments WHERE name = ?`, [instrumentName], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]?.id || null);
    });
  });
};


// DO NOT TOUCH THIS -- seed dummy data for database 
const runSeeder = async () => {
  db.connect(async (err) => {
    if (err) {
      console.error("!Error! Error connecting to database:", err.message);
      process.exit(1);
    }

    console.log("SUCCESS: Connected to MySQL.");

    db.query(`SELECT id, store_id, instrument FROM teachers`, async (err, teachers) => {
      if (err) throw err;

      console.log("Teachers found:", teachers.length);
      const slots = getTimeSlots();
      let insertCount = 0;
      let skipCount = 0;

      for (const teacher of teachers) {
        const storeId = teacher.store_id;
        const instrumentId = await getInstrumentIdByName(teacher.instrument);

        if (!instrumentId) {
          console.warn(`!Warning! No instrument ID found for teacher ${teacher.id} (${teacher.instrument})`);
          continue;
        }

        for (let day = 0; day < numberOfDays; day++) {
          const date = format(addDays(today, day), "yyyy-MM-dd");

          for (const slot of slots) {
            const exists = await lessonExists(teacher.id, date, slot.start);
            if (exists) {
              skipCount++;
              continue;
            }

            const status = statuses[Math.floor(Math.random() * statuses.length)];
            await insertLesson(teacher.id, storeId, instrumentId, date, slot.start, slot.end, status);
            insertCount++;
          }
        }
      }

      console.log(`!Notice! Inserted ${insertCount} new lesson slots.`);
      console.log(`!Notice! Skipped ${skipCount} existing slots.`);
      db.end();
    });
  });
};

runSeeder();
