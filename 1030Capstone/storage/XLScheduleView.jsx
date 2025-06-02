import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CircularProgress
} from "@mui/material";
import  useAuthUser  from "../hooks/useAuthUser"; // or useContext(AuthContext)
import { format, parse, addMinutes } from "date-fns";

const startHour = 9;
const endHour = 17;
const slotDuration = 30;

const ScheduleView = () => {
  const { user } = useAuthUser();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTimeSlots = () => {
    const slots = [];
    for (let hour = startHour; hour < endHour; hour++) {
      for (let min = 0; min < 60; min += slotDuration) {
        const time = `${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}:00`;
        slots.push(time);
      }
    }
    return slots;
  };

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/lessons?studentId=${user.id}`);
        const data = await res.json();
        setLessons(data);
      } catch (err) {
        console.error("Failed to fetch lessons:", err);
      } finally {
        setLoading(false);
      }
    };
    if (user?.id) fetchLessons();
  }, [user]);

  const groupLessons = () => {
    const map = {};
    for (const lesson of lessons) {
      if (!map[lesson.date]) map[lesson.date] = {};
      map[lesson.date][lesson.start_time] = lesson;
    }
    return map;
  };

  const groupedLessons = groupLessons();
  const timeSlots = getTimeSlots();
  const uniqueDates = [...new Set(lessons.map((l) => l.date))].sort();

  if (loading) return <CircularProgress />;

  return (
    <Box p={2}>
      <Typography variant="h4" mb={2}>My Schedule</Typography>

      <Grid container spacing={1}>
        {/* Header row */}
        <Grid item xs={2}>
          <Typography variant="subtitle2">Time</Typography>
        </Grid>
        {uniqueDates.map((date) => (
          <Grid item xs key={date}>
            <Typography variant="subtitle2">{format(new Date(date), "EEE MMM d")}</Typography>
          </Grid>
        ))}

        {/* Time slot rows */}
        {timeSlots.map((time) => (
          <Grid container spacing={1} key={time}>
            <Grid item xs={2}>
              <Typography variant="body2">{time.slice(0, 5)}</Typography>
            </Grid>
            {uniqueDates.map((date) => {
              const lesson = groupedLessons[date]?.[time];
              return (
                <Grid item xs key={`${date}-${time}`}>
                  {lesson ? (
                    <Card variant="outlined" sx={{ bgcolor: "#e3f2fd" }}>
                      <CardContent sx={{ p: 1 }}>
                        <Typography variant="body2" fontWeight="bold">{lesson.instrumentName}</Typography>
                        <Typography variant="caption">{lesson.teacherName}</Typography>
                      </CardContent>
                    </Card>
                  ) : (
                    <Box sx={{ border: "1px solid #ccc", minHeight: 60 }} />
                  )}
                </Grid>
              );
            })}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ScheduleView;
