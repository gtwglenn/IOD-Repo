// currently only used for sidebar + calculator as an alternate to MainLayout


import { Box } from "@mui/material";
import CalSidebar from "../components/SideBarCal.jsx";

export default function SecondaryLayout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CalSidebar />
      <Box sx={{ flex: 1, p: 3 }}>{children}</Box>
    </Box>
  );
}



// changes for GIT commit 