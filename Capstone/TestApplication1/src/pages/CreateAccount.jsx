import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = `${firstName} ${lastName}`.trim();

    const newUser = {
      firstName,
      lastName,
      username,  
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

    if (response.ok) {
        if (data.token) {
            localStorage.setItem("token", data.token);
            navigate("/home"); // or your protected page
        } else {
            setMessage("Account created successfully!");
            // setTimeout(() => navigate("/"), 1500); // ⬅️ your actual login route
            setTimeout(() => navigate("/create-profile"), 1500);
        }
        } else {
        setMessage(data.message || "Signup failed.");
        } 
        
    } catch (err) {
            console.error("Error signing up.", err);
            setMessage("Server error.");
        }

  };


//   if (response.ok) {
    //     setMessage("Account created successfully!");
    //     setTimeout(() => navigate("/"), 1500);
    //   } else {
    //     setMessage(data.message || "Signup failed.");
    //   }
    // } catch (err) {
    //   console.error("Error signing up:", err);
    //   setMessage("Server error.");
    // }


// automatically login after signup 
// if (response.ok) {
//   if (data.token) {
//     localStorage.setItem("token", data.token);  // Save JWT token
//     navigate("/home");                          // Redirect to home (or dashboard)
//   } else {
//     setMessage("Account created successfully!");
//     setTimeout(() => navigate("/"), 1500);      // Fallback to login page
//   }
// }



  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Create Account
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="First Name"
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Last Name"
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {message && (
            <Typography color="error" sx={{ mt: 2 }}>
              {message}
            </Typography>
          )}

          <Box sx={{ mt: 3 }}>
            <Button type="submit" variant="contained" fullWidth>
              Sign Up
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}



// changes for GIT commit 