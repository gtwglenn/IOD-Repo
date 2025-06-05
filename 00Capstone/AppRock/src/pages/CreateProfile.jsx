import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useAuth } from "../context/AuthContext";

export default function CreateProfile() {
  const { fetchUser } = useAuth();
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [instrument, setInstrument] = useState("");
  const [storeLocation, setStoreLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ instrument, role, storeLocation }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Profile update failed");
      }

      console.log("✅ Profile updated:", data);

      // Optional: if backend returns a new token after profile update
      if (data.token) {
        localStorage.setItem("token", data.token);
        console.log("Updated token saved to localStorage");
      }

      try {
        await fetchUser();
        console.log(" User context successfully refreshed");
        navigate("/home");
      } catch (err) {
        console.error("Error refreshing user context:", err);
        setMessage("Profile updated, but we couldn't refresh user data. Try logging in again.");
        // Optional fallback:
        // navigate("/home");
      }
    } catch (err) {
      console.error("Profile update error:", err);
      setMessage(err.message || "Something went wrong.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #e0f7fa, #e3f2fd)",
          p: 2,
        }}
      >
        <Paper elevation={6} sx={{ p: 4, borderRadius: 3, width: "100%" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Complete Your Profile
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
            <FormControl fullWidth required margin="normal">
              <InputLabel>Select Role</InputLabel>
              <Select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                label="Select Role"
              >
                <MenuItem value="Employee">Employee</MenuItem>
                <MenuItem value="Teacher">Teacher</MenuItem>
                <MenuItem value="Student">Student</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth required margin="normal">
              <InputLabel>Select Instrument</InputLabel>
              <Select
                value={instrument}
                onChange={(e) => setInstrument(e.target.value)}
                label="Select Instrument"
              >
                <MenuItem value="Instrument1">Instrument1</MenuItem>
                <MenuItem value="Instrument2">Instrument2</MenuItem>
                <MenuItem value="Instrument3">Instrument3</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth required margin="normal">
              <InputLabel>Select Store Location</InputLabel>
              <Select
                value={storeLocation}
                onChange={(e) => setStoreLocation(e.target.value)}
                label="Select Store Location"
              >
                <MenuItem value="Store001">Store001</MenuItem>
                <MenuItem value="Store002">Store002</MenuItem>
                <MenuItem value="Store003">Store003</MenuItem>
              </Select>
            </FormControl>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 3 }}
            >
              Submit
            </Button>
          </Box>

          {message && (
            <Typography
              variant="body2"
              align="center"
              color={message.includes("successfully") ? "green" : "error"}
              sx={{ mt: 2 }}
            >
              {message}
            </Typography>
          )}
        </Paper>
      </Box>
    </Container>
  );
}
