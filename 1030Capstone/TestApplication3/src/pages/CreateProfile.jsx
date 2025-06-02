// if time allows: change instrument selection to radio buttons/multiple selections 
//            --> teachers can teach multiple instruments/students can take lessons for different instruments 
//                    *(at reserve time/lesson time) *select instrument* 



// ***for employee/teacher role*** --> set store location
// ***might actually remove employee role*** --> employee role only purpose is to edit schedules? approve reschedules? 
//          ^not really necessary for test build of application, because then I'd have to create a change schedule/reschedule system 


// ***** STUDENTS DO NOT NEED A STORELOCATION VALUE --> TEACHERS/EMPLOYEES ONLY ***** 


// ***** UPDATE: REDIRECT TO MYHOME AFTER SUCCESSFUL ACCOUNT CREATION *****

//  currently redirects to /login, should be easy fix, but account creation process is working 





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
  const [message, setMessage] = useState("");

  const [storeLocation, setStoreLocation] = useState(""); 

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

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Profile update failed");
      }

      await fetchUser(); // Refresh user context
      setMessage("Profile updated successfully!");
      navigate("/home");
    } catch (err) {
      console.error("Profile error:", err);
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

{/* // if time allows: change instrument selection to radio buttons/multiple selections 
//            --> teachers can teach multiple instruments/students can take lessons for different instruments 
//                    *(at reserve time/lesson time) *select instrument*  */}

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

{/* at full build --> have separate CreateAccount for Organizations/Businesses --> prompt for setting up StoreLocations */}

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
