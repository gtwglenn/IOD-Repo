// /components/Calendar.jsx
import { useState, useEffect } from "react";

export default function Calendar({ selectedDate, onDateChange }) {
  const [localDate, setLocalDate] = useState(selectedDate || new Date());

  useEffect(() => {
    onDateChange(localDate);
  }, [localDate]);

  const handleChange = (e) => {
    setLocalDate(new Date(e.target.value));
  };

  return (
    <div>
      <label htmlFor="calendarInput"><strong>Select Date: </strong></label>
      <input
        id="calendarInput"
        type="date"
        value={localDate.toISOString().split("T")[0]}
        onChange={handleChange}
      />
    </div>
  );
}
