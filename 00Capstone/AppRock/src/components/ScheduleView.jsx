import { useEffect, useState } from "react";

export default function ScheduleView({ selectedDate, selectedStoreId }) {
  const [teachers, setTeachers] = useState([]);
  const [lessons, setLessons] = useState([]);

  const currentDate = selectedDate || new Date();
  const dateStr = currentDate.toLocaleDateString("en-CA"); // YYYY-MM-DD

  const timeslots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30"
  ];

  useEffect(() => {
    if (!selectedStoreId) return;

    fetch(`http://localhost:5000/api/teachers?storeId=${selectedStoreId}`)
      .then(res => res.json())
      .then(data => {
        console.log("Teachers loaded:", data);
        setTeachers(data);
      })
      .catch(err => console.error("Teacher fetch error:", err));
  }, [selectedStoreId]);

  useEffect(() => {
    if (!selectedStoreId || !selectedDate) return;

    fetch(`http://localhost:5000/api/lessons?storeId=${selectedStoreId}&date=${dateStr}`)
      .then(res => res.json())
      .then(data => {
        console.log("Lessons loaded:", data);
        setLessons(data);
      })
      .catch(err => console.error("Lesson fetch error:", err));
  }, [selectedStoreId, selectedDate]);

  const getLessonForSlot = (teacherId, time) => {
    return lessons.find(
      lesson =>
        lesson.teacher_id === teacherId &&
        lesson.start_time.startsWith(time)
    );
  };

  return (
    <div style={{ padding: "1rem" }}>

                                                {/* ADD SOME FANCY LOGOS AND LOOK SPIFFY */}

      <h3>■ Store #{selectedStoreId} | ■ {dateStr}</h3>

      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Time</th>
            {teachers.length > 0 ? (
              teachers.map((teacher) => (
                <th key={teacher.id}>
                  {teacher.firstName} {teacher.lastName}
                </th>
              ))
            ) : (
              <>
              {/* CHANGE THIS TO FILL TEACHER.USERNAME */}
                <th>Teacher1</th>
                <th>Teacher2</th>
                <th>Teacher3</th>
              </>
            )}
            <th>+</th>
          </tr>
        </thead>
        <tbody>
          {timeslots.map((time) => (
            <tr key={time}>
              <td>{time}</td>

              {(teachers.length > 0 ? teachers : [1, 2, 3]).map((t, index) => {
                const teacherId = t.id || index + 1;
                const lesson = getLessonForSlot(teacherId, time);
                return (
                  <td key={`${teacherId}-${time}`}>
                    {lesson ? lesson.status : ""}
                  </td>
                );
              })}

              <td>…</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
