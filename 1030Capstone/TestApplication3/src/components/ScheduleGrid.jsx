import { useState, useEffect } from "react";

export default function ScheduleGrid({ teacher, date, selectedDate, onBookSlot }) {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!teacher || !date) return;

    setLoading(true);
    setError(null);

    fetch(`http://localhost:5000/api/schedule?teacherId=${teacher.id}&date=${date}`)
      .then((res) => res.json())
      .then((data) => {
        setSlots(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading schedule:", err);
        setError("Failed to load schedule.");
        setLoading(false);
      });
  }, [teacher, date]);

  const getSlotColor = (status) => {
    switch (status) {
      case "booked":
        return "#3b82f6"; // blue
      case "pending":
        return "#f59e0b"; // orange
      case "available":
        return "#10b981"; // green
      case "unavailable":
        return "#ef4444"; // red
      default:
        return "#9ca3af"; // gray (unknown)
    }
  };

  const formatTime = (time) => {
    const [hour, minute] = time.split(":");
    const hourNum = parseInt(hour);
    const suffix = hourNum >= 12 ? "PM" : "AM";
    const formattedHour = hourNum % 12 === 0 ? 12 : hourNum % 12;
    return `${formattedHour}:${minute} ${suffix}`;
  };

  if (loading) {
    return <div className="text-center mt-4">Loading schedule...</div>;
  }

  if (error) {
    return (
      <div className="text-red-600 text-center mt-4 font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {slots.map((slot) => (
        <div
          key={slot.id}
          onClick={() =>
            slot.status === "available" && onBookSlot(slot.id)
          }
          className="rounded-lg p-3 text-white text-sm text-center shadow-md transition-transform transform hover:scale-[1.02]"
          style={{
            backgroundColor: getSlotColor(slot.status),
            cursor: slot.status === "available" ? "pointer" : "default",
            opacity: slot.status === "available" ? 1 : 0.8,
          }}
        >
          <div>{formatTime(slot.start_time)} - {formatTime(slot.end_time)}</div>
          <div className="mt-1 font-bold uppercase tracking-wide">
            {slot.status}
          </div>
        </div>
      ))}
    </div>
  );
}
