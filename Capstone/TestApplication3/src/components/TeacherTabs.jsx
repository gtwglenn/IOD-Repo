import { Box, Tabs, Tab, Button } from "@mui/material";

export default function TeacherTabs({
  teachers,
  instruments,
  selectedTeacher,
  onTeacherSelect,
  onAddTeacher,
}) {
  return (
    <Box>
      <Tabs
        value={selectedTeacher ? selectedTeacher.id : false}
        onChange={(e, newId) => {
          const teacher = teachers.find((t) => t.id === newId);
          if (teacher) onTeacherSelect(teacher);
        }}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="Teacher Tabs"
      >
        {teachers.map((teacher) => (
          <Tab key={teacher.id} label={teacher.name} value={teacher.id} />
        ))}
      </Tabs>
      <Box mt={2}>
        <Button variant="outlined" onClick={onAddTeacher}>
          + Add Teacher
        </Button>
      </Box>
    </Box>
  );
}
