import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
// import Calendar from 'react-calendar'; 

export default function LegendPanel() {
  return (
    <Box p={2} border="1px solid #ccc" borderRadius={2}>
      <Typography variant="h6" gutterBottom>
        MySchedule: 
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="[icon]Piano Lesson" />
        </ListItem>
        <ListItem>
          <ListItemText primary="[icon]Guitar Lesson" />
        </ListItem>
        <ListItem>
          <ListItemText primary="[icon]Drum Lesson" />
        </ListItem>
      </List>
    </Box>
  );
}
