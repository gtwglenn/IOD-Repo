// should have done LessonCancel to avoid the lL in there ,':^D 

import { useEffect, useState } from "react";

export default function CancelLesson({ userId, refreshKey, onCancel }) {
  const [lessons, setLessons] = useState([]);
  const [selectedLessonId, setSelectedLessonId] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/lessons?studentId=${userId}`)
      .then(res => res.json())
      .then(data => setLessons(data))
      .catch(err => console.error("Error loading lessons:", err));
  }, [userId, refreshKey]);

  const handleCancel = () => {
    if (!selectedLessonId) return;

    fetch(`http://localhost:5000/api/lessons/${selectedLessonId}`, {
      method: "DELETE"
    })
      .then(() => {
        alert("Lesson canceled!");
        setSelectedLessonId("");
        if (onCancel) onCancel(); // trigger ScheduleView refresh
      })
      .catch(err => console.error("Delete error:", err));
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>Cancel Lesson</h3>
      <select
        value={selectedLessonId}
        onChange={(e) => setSelectedLessonId(e.target.value)}
      >
        <option value="">Select a lesson</option>
        {lessons.map(lesson => {
          const time = new Date(lesson.start_time).toLocaleString();
          return (
            <option key={lesson.id} value={lesson.id}>
              {lesson.teacher_name} - {lesson.instrument} at {time}
            </option>
          );
        })}
      </select>
      <button onClick={handleCancel} disabled={!selectedLessonId}>
        Cancel Lesson
      </button>
    </div>
  );
}