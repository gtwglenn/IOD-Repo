import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flex: 1, p: 3 }}>{children}</Box>
    </Box>
  );
}

// so with <Sidebar /> as a child of the main Box --> Sidebar appears on every page that uses <MainLayout /> 


// changes for GIT commit 
