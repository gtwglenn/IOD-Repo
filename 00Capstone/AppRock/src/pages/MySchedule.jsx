import { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Calendar from "../components/Calendar";
import ScheduleView from "../components/ScheduleView";
import ScheduleLesson from "../components/ScheduleLesson";
import { AuthContext } from "../context/AuthContext"; 
import CancelLesson from "../components/CancelLesson";

export default function MySchedule() {
  const { user } = useContext(AuthContext); 
  const [searchParams] = useSearchParams();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedStoreId, setSelectedStoreId] = useState("");

  const [committedDate, setCommittedDate] = useState(null);
  const [committedStoreId, setCommittedStoreId] = useState(null);

  const [refreshKey, setRefreshKey] = useState(0); 

  useEffect(() => {
    const storeFromURL = searchParams.get("store");
    const dateFromURL = searchParams.get("date");

    if (storeFromURL && dateFromURL) {
      const storeMap = {
        Store001: "1",
        Store002: "2",
        Store003: "3",
      };

      const storeId = storeMap[storeFromURL] || "";
      setSelectedStoreId(storeId);
      setSelectedDate(new Date(dateFromURL));
      setCommittedStoreId(storeId);
      setCommittedDate(new Date(dateFromURL));
    }
  }, []);

  const handleStoreChange = (e) => {
    setSelectedStoreId(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    if (selectedStoreId && selectedDate) {
      setCommittedStoreId(selectedStoreId);
      setCommittedDate(selectedDate);
    } else {
      alert("Please select both a store and a date.");
    }
  };

    return (
    <div style={{ padding: "2rem" }}>
      <h2>|Logo| Lesson Scheduler</h2>

      {/* Header: Store + Date Selectors */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="storeSelect"><strong>Select Store: </strong></label>
        <select id="storeSelect" value={selectedStoreId} onChange={handleStoreChange}>
          <option value="">-- Choose Store --</option>
          <option value="1">Store001</option>
          <option value="2">Store002</option>
          <option value="3">Store003</option>
        </select>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {/* Show lesson-related views after submit */}
      {committedStoreId && committedDate && (
        <>
          <ScheduleLesson
            selectedStoreId={committedStoreId}
            selectedDate={committedDate}
            studentId={user?.id}
            onLessonScheduled={() => setRefreshKey(prev => prev + 1)}
          />

          <ScheduleView
            selectedDate={committedDate}
            selectedStoreId={committedStoreId}
            refreshKey={refreshKey}
          />

          <CancelLesson
            userId={user?.id}
            refreshKey={refreshKey}
            onCancel={() => setRefreshKey(prev => prev + 1)}
          />
        </>
      )}
    </div>
  );

}











// import { useState } from "react";
// import Calendar from "../components/Calendar";
// import ScheduleView from "../components/ScheduleView";

// export default function MySchedule() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedStoreId, setSelectedStoreId] = useState("");

//   const [committedDate, setCommittedDate] = useState(null);
//   const [committedStoreId, setCommittedStoreId] = useState(null);

//   const handleStoreChange = (e) => {
//     setSelectedStoreId(e.target.value);
//     // do NOT reset committed values
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     // do NOT reset committed values
//   };

//   const handleSubmit = () => {
//     if (selectedStoreId && selectedDate) {
//       setCommittedStoreId(selectedStoreId);
//       setCommittedDate(selectedDate);
//     } else {
//       alert("Please select both a store and a date.");
//     }
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h2>|Logo| Lesson Scheduler</h2>

//       {/* Header: Store + Date Selectors */}
//       <div style={{ marginBottom: "1rem" }}>
//         <label htmlFor="storeSelect"><strong>Select Store: </strong></label>
//         <select id="storeSelect" value={selectedStoreId} onChange={handleStoreChange}>
//           <option value="">-- Choose Store --</option>
//           <option value="1">Store001</option>
//           <option value="2">Store002</option>
//           <option value="3">Store003</option>
//         </select>
//       </div>

//       <div style={{ marginBottom: "1rem" }}>
//         <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
//       </div>

//       <div style={{ marginBottom: "1.5rem" }}>
//         <button onClick={handleSubmit}>Submit</button>
//       </div>

//       {/* View uses committed selections only */}
//       {committedStoreId && committedDate && (
//         <ScheduleView
//           selectedDate={committedDate}
//           selectedStoreId={committedStoreId}
//         />
//       )}
//     </div>
//   );
// }
