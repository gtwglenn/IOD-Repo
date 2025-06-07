// generateFullSchedule.js
const db = require('./db.js'); // adjust if needed
const { format, addDays, eachDayOfInterval } = require('date-fns');

const START_DATE = new Date('2025-05-25');
const END_DATE = new Date('2025-08-31');

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30',
];

async function generateSchedule() {
  try {
    const [teachers] = await db.query('SELECT id, store_id, instrument_id FROM teachers');

    if (!teachers.length) {
      console.log('❌ No teachers found. Aborting.');
      return;
    }

    const days = eachDayOfInterval({ start: START_DATE, end: END_DATE });

    for (const teacher of teachers) {
      for (const day of days) {
        const formattedDate = format(day, 'yyyy-MM-dd');

        for (let i = 0; i < TIME_SLOTS.length; i++) {
          const startTime = TIME_SLOTS[i] + ':00';
          const [h, m] = TIME_SLOTS[i].split(':');
          const end = new Date(day);
          end.setHours(parseInt(h), parseInt(m) + 30);
          const endTime = format(end, 'HH:mm:ss');

          await db.query(
            `INSERT INTO lessons 
              (teacher_id, store_id, instrument_id, date, start_time, end_time, status)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
              teacher.id,
              teacher.store_id,
              teacher.instrument_id,
              formattedDate,
              startTime,
              endTime,
              'available',
            ]
          );
        }
      }
      console.log(`✅ Seeded for Teacher ID: ${teacher.id}`);
    }

    console.log('🎉 Full schedule seeded successfully.');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error generating schedule:', err);
    process.exit(1);
  }
}

generateSchedule();
