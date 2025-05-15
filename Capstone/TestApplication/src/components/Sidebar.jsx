import { Box, List, ListItemButton, ListItemText, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "MyHome", path: "/home" },
  { label: "MySchedule", path: "/schedule" },
  { label: "StoreLocator", path: "/store" },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate("/");
  };

  return (
    <Box
      sx={{
        width: 200,
        height: "100vh",
        bgcolor: "#f5f5f5",
        borderRight: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItemButton
            key={item.path}
            selected={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}

        {/* Logout directly under last tab */}
        <ListItemButton onClick={handleLogout} sx={{ mt: 2 }}>
          <ListItemText primary="Logout" sx={{ color: "red" }} />
        </ListItemButton>
      </List>
    </Box>
  );
}
