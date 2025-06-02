import { useState, useEffect } from "react";

export default function useSchedule(teacherId, date) {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!teacherId || !date) return;

    setLoading(true);
    fetch(`http://localhost:5000/api/schedule?teacherId=${teacherId}&date=${date}`)
      .then(res => res.json())
      .then(data => {
        setSlots(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load schedule", err);
        setLoading(false);
      });
  }, [teacherId, date]);

  return { slots, loading };
}
