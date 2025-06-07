import { useState } from "react";
import Calendar from "../components/Calendar"; // adjust path as needed
import ScheduleView from "../components/ScheduleView";

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedStoreId, setSelectedStoreId] = useState("");

  const handleStoreChange = (e) => {
    setSelectedStoreId(e.target.value);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🎼 Lesson Scheduler</h2>

      {/* Store Selector */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="storeSelect"><strong>Select Store: </strong></label>
        <select id="storeSelect" value={selectedStoreId} onChange={handleStoreChange}>
          <option value="">-- Choose Store --</option>
          <option value="1">Store001</option>
          <option value="2">Store002</option>
          <option value="3">Store003</option>
        </select>
      </div>

      {/* Calendar Picker */}
      <div style={{ marginBottom: "1rem" }}>
        <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
      </div>

      {/* Schedule Grid */}
      <ScheduleView selectedDate={selectedDate} selectedStoreId={selectedStoreId} />
    </div>
  );
}
