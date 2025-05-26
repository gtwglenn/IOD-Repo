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


// for select role: employee/teacher --> additional: select store# 


export default function CreateProfile() {
  const location = useLocation();
  const newUser = location.state?.newUser || {};

  const [instrument, setInstrument] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!instrument || !role) {
  //     setMessage("Please select both an instrument and a role.");
  //     return;
  //   }

  //   console.log("Final profile created:", {
  //     ...newUser,
  //     Instrument: instrument,
  //     Role: role,
  //   });

  //   setMessage("Profile created successfully!");
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!instrument || !role) {
  //     setMessage("Please select both an instrument and a role.");
  //     return;
  //   }

  //   const completeUser = {
  //     ...newUser,
  //     instrument,
  //     role,
  //   };

  //   try {
  //     const response = await fetch("http://localhost:5000/api/update-profile", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`, // if using JWT
  //       },
  //       body: JSON.stringify(completeUser),
  //     });

  //     const result = await response.json();

  //     if (response.ok) {
  //       setMessage("Profile created successfully!");
  //       setTimeout(() => {
  //         // Redirect to home/dashboard after profile creation
  //         window.location.href = "/home";
  //       }, 1500);
  //     } else {
  //       setMessage(result.message || "Failed to create profile.");
  //     }
  //   } catch (err) {
  //     console.error("Error submitting profile:", err);
  //     setMessage("Server error.");
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token"); // Adjust if you're storing it elsewhere

  try {
    const response = await fetch("http://localhost:5000/api/update-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ instrument, role }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Error submitting profile:", text);
      setMessage(text); // Optional: show error to user
      return;
    }

    const data = await response.json();
    console.log("Profile update success:", data);
    setMessage("Profile updated successfully!");
    // Navigate or refresh user state here if needed

  } catch (error) {
    console.error("Error submitting profile:", error);
    setMessage("Something went wrong. Please try again.");
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



// changes for GIT commit 


// user should be directed to home after creating profile 
// profile is then loaded center screen on home 
// maybe let them upload a profile picture if I have time 
// [                    ]
// [  contact info      ]
// [  role              ]
// [  etc.              ]