import { useEffect, useState } from "react";

export default function ScheduleView({ selectedDate, selectedStoreId, refreshKey }) {
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
    const storeTeachers = {
      1: [
        { id: 1, name: 'Teacher1' },
        { id: 2, name: 'Teacher2' },
        { id: 3, name: 'Teacher3' }
      ],
      2: [
        { id: 4, name: 'Teacher1' },
        { id: 5, name: 'Teacher2' },
        { id: 6, name: 'Teacher3' }
      ],
      3: [
        { id: 7, name: 'Teacher1' },
        { id: 8, name: 'Teacher2' },
        { id: 9, name: 'Teacher3' }
      ]
    };
    setTeachers(storeTeachers[selectedStoreId] || []);
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
  }, [selectedStoreId, selectedDate, refreshKey]);

  const getLessonForSlot = (teacherId, time) => {
    const match = lessons.find((lesson) => {
      const lessonDate = new Date(lesson.start_time);
      const lessonTime = lessonDate.toTimeString().slice(0, 5);
      return lesson.teacher_id === teacherId && lessonTime === time;
    });

    if (match) {
      console.log(`📘 Match found for Teacher ${teacherId} at ${time}`);
    }

    return match;
  };


  // const getLessonForSlot = (teacherId, time) => {
  //   return lessons.find((lesson) => {
  //     const lessonTime = new Date(lesson.start_time).toLocaleTimeString("en-GB", {
  //       hour: "2-digit",
  //       minute: "2-digit",
  //       hour12: false,
  //     });
  //     return lesson.teacher_id === teacherId && lessonTime === time;
  //   });
  // };

  return (
    <div style={{ padding: "1rem" }}>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Time</th>
            {teachers.map(t => <th key={t.id}>{t.name}</th>)}
          </tr>
        </thead>
        <tbody>
          {timeslots.map(time => (
            <tr key={time}>
              <td>{time}</td>
              {teachers.map(t => {
                const lesson = getLessonForSlot(t.id, time);
                return (
                  <td
                    key={t.id + time}
                    style={{
                      backgroundColor: lesson ? "#87CEFA" : "#98FB98", // blue if booked, green if available
                      textAlign: "center",
                      transition: "background-color 0.3s ease"
                    }}
                  >
                    {lesson ? "Booked" : "Available"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
