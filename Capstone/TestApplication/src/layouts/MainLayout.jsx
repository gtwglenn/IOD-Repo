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
