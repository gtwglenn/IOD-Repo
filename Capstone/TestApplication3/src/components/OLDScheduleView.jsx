import { useState, useEffect } from "react";
import ScheduleHeader from "../components/ScheduleHeader";
import TeacherTabs from "../components/TeacherTabs";
import ScheduleGrid from "../components/ScheduleGrid";
import LegendPanel from "../components/LegendPanel";
import AddTeacherModal from "../components/AddTeacherModal";
import { format } from "date-fns";
import { useAuth } from "../context/AuthContext"; // 🔑 for user + token

export default function ScheduleView() {
  const { user, token } = useAuth(); // 🔑 Assumes AuthContext provides this

  const [selectedStore, setSelectedStore] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isAddTeacherModalOpen, setIsAddTeacherModalOpen] = useState(false);

  const [stores, setStores] = useState([]);
  const [instruments, setInstruments] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dateString = format(selectedDate, "yyyy-MM-dd");

  // Fetch stores
  useEffect(() => {
    fetch("http://localhost:5000/api/stores")
      .then((res) => res.json())
      .then((data) => setStores(data))
      .catch((err) => {
        console.error("Store fetch error:", err);
        setError("Failed to fetch stores");
      });
  }, []);

  // Fetch instruments
  useEffect(() => {
    fetch("http://localhost:5000/api/instruments")
      .then((res) => res.json())
      .then((data) => setInstruments(data))
      .catch((err) => {
        console.error("Instrument fetch error:", err);
        setError("Failed to fetch instruments");
      });
  }, []);

  // Fetch teachers when selectedStore changes
  useEffect(() => {
    setLoading(true);

    fetch(`http://localhost:5000/api/teachers?storeId=${selectedStore}`)
      .then(async (res) => {
        const text = await res.text();
        console.log("🔍 Response status:", res.status);
        console.log("🔍 Raw response body:", text);

        if (!res.ok) throw new Error(`Fetch failed with status ${res.status}`);
        return JSON.parse(text);
      })
      .then((data) => {
        console.log("✅ Parsed teacher data:", data);
        setTeachers(data);
        if (data.length > 0) {
          setSelectedTeacher((prev) => prev ?? data[0]);
        }
      })
      .catch((err) => {
        console.error("Teacher fetch error:", err);
        setError("Failed to fetch teachers");
      })
      .finally(() => setLoading(false));
  }, [selectedStore]);

  // 🆕 Booking handler
  const handleBookSlot = async (lessonId) => {
    try {
      const res = await fetch("http://localhost:5000/api/lessons/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          lessonId,
          studentId: user.id,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Lesson successfully booked!");
        // Consider adding a callback here to trigger a refetch if needed
      } else {
        alert("⚠️ Booking failed: " + data.message);
      }
    } catch (err) {
      console.error("Booking error:", err);
      alert("🚫 An error occurred while booking the lesson.");
    }
  };

  if (error) {
    return (
      <div className="text-red-600 font-bold p-6">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ScheduleHeader
        stores={stores}
        selectedStore={selectedStore}
        selectedDate={selectedDate}
        onStoreChange={setSelectedStore}
        onDateChange={setSelectedDate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <TeacherTabs
              teachers={teachers}
              instruments={instruments}
              selectedTeacher={selectedTeacher}
              onTeacherSelect={setSelectedTeacher}
              onAddTeacher={() => setIsAddTeacherModalOpen(true)}
            />

            {loading ? (
              <div className="text-center mt-4">Loading schedule...</div>
            ) : (
              selectedTeacher && (
                <ScheduleGrid
                  teacher={selectedTeacher}
                  date={dateString}
                  selectedDate={selectedDate}
                  onBookSlot={handleBookSlot} // ✅ Pass booking handler
                />
              )
            )}
          </div>

          <div className="lg:col-span-1">
            <LegendPanel />
          </div>
        </div>
      </div>

      <AddTeacherModal
        isOpen={isAddTeacherModalOpen}
        onClose={() => setIsAddTeacherModalOpen(false)}
        storeId={selectedStore}
        instruments={instruments}
      />
    </div>
  );
}
