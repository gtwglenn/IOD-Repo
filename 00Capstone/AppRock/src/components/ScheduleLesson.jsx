import { useState, useEffect } from "react";

export default function ScheduleLesson({ selectedStoreId, selectedDate, studentId, onLessonScheduled }) {
  const [teachers, setTeachers] = useState([]);
  const [form, setForm] = useState({ teacherId: "", time: "" });

  const timeslots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30"
  ];

  const dateStr = selectedDate ? new Date(selectedDate).toLocaleDateString("en-CA") : new Date().toLocaleDateString("en-CA");

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.teacherId || !form.time || !studentId) return alert("Missing required fields.");

    const res = await fetch("http://localhost:5000/api/lessons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        teacher_id: form.teacherId,
        store_id: selectedStoreId,
        student_id: studentId,
        start_time: `${dateStr} ${form.time}`
      })
    });

    if (res.ok) {
      const newLesson = await res.json();
      if (onLessonScheduled) onLessonScheduled(newLesson);
      setForm({ teacherId: "", time: "" });
    } else {
      alert("Failed to schedule lesson.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem", background: "#f4f4f4", borderRadius: "8px", marginBottom: "1rem" }}>
      <h3>Schedule a Lesson</h3>
      <label>
        Teacher:
        <select name="teacherId" value={form.teacherId} onChange={handleChange} required>
          <option value="">-- Select Teacher --</option>
          {teachers.map(t => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
      </label>
      &nbsp;&nbsp;
      <label>
        Time:
        <select name="time" value={form.time} onChange={handleChange} required>
          <option value="">-- Select Time --</option>
          {timeslots.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </label>
      &nbsp;&nbsp;
      <button type="submit">Schedule</button>
    </form>
  );
}