import { Typography } from "@mui/material";
// import MyCalendar from "../components/Calendar.jsx";
import MyProfile from '../components/MyProfile.jsx'

export default function MyHome() {
  //return <Typography variant="h4">Welcome to My Home!<br></br><p>MyProfile goes here: </p></Typography>;
  return <Typography variant="h4">Welcome to My Home!<br></br><MyProfile /></Typography>;
}


//add <MyProfile />
// <MyProfile /> should include LocalSchedule or something similar 
// do NOT want SideCalendar --> make separate sidebar for MySchedule (only page that will have SideCalendar)


// changes for GIT commit 