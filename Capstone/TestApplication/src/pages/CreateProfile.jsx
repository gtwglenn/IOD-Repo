import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useLocation } from "react-router-dom";

export default function CreateProfile() {
  const location = useLocation();
  const newUser = location.state?.newUser || {};

  const [instrument, setInstrument] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!instrument || !role) {
      setMessage("Please select both an instrument and a role.");
      return;
    }

    console.log("Final profile created:", {
      ...newUser,
      Instrument: instrument,
      Role: role,
    });

    setMessage("Profile created successfully!");
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
