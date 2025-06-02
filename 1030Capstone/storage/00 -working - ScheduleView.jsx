import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ScheduleView({ selectedDate, selectedStoreId }) {
  const { user } = useContext(AuthContext);
  const [teachers, setTeachers] = useState([]);
  const [lessons, setLessons] = useState([]);

  const currentDate = selectedDate || new Date();

  const timeslots = Array.from({ length: 16 }, (_, i) => {
    const hour = 9 + Math.floor(i / 2);
    const minute = i % 2 === 0 ? "00" : "30";
    return `${hour.toString().padStart(2, "0")}:${minute}`;
  });

  useEffect(() => {
    if (!selectedStoreId) return;

    fetch(`/api/teachers?storeId=${selectedStoreId}`)
      .then(res => res.json())
      .then(data => setTeachers(data))
      .catch(err => console.error("Failed to fetch teachers", err));
  }, [selectedStoreId]);

  useEffect(() => {
    if (!selectedStoreId || !currentDate) return;

    // const dateStr = currentDate.toISOString().split("T")[0];
    const dateStr = currentDate.toLocaleDateString("en-CA");

    fetch(`/api/lessons?storeId=${selectedStoreId}&date=${dateStr}`)
      .then(res => res.json())
      .then(data => setLessons(data))
      .catch(err => console.error("Failed to fetch lessons", err));
  }, [selectedStoreId, currentDate]);

  return (
    <div style={{ padding: "1rem" }}>
      <h3>
        📍 Store: {selectedStoreId ? `#${selectedStoreId}` : "—"} | 📅 Date:{" "}
        {currentDate.toLocaleDateString()}
      </h3>

      {selectedStoreId ? (
        <table border="1" cellPadding="8" cellSpacing="0" style={{ marginTop: "1rem", width: "100%" }}>
          <thead>
            <tr>
              <th>Time</th>
              {teachers.map(t => (
                <th key={t.id}>{t.firstName} {t.lastName}</th>
              ))}
              <th>+</th>
            </tr>
          </thead>
          <tbody>
            {timeslots.map(time => (
              <tr key={time}>
                <td>{time}</td>
                {teachers.map(teacher => {
                  const lesson = lessons.find(
                    l => l.teacher_id === teacher.id && l.start_time.startsWith(time)
                  );
                  return (
                    <td key={`${teacher.id}-${time}`} style={{ backgroundColor: lesson ? "#dff0d8" : "#fff" }}>
                      {lesson ? lesson.instrument_name : ""}
                    </td>
                  );
                })}
                <td>⋯</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>🛈 Please select a store to view schedule.</p>
      )}
    </div>
  );
}
