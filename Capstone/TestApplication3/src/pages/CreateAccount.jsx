import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

export default function CreateAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth(); // 👈 Get login from context


const handleSubmit = async (e) => {
  e.preventDefault();

  const newUser = {
    firstName,
    lastName,
    email,
    password,
  };

  try {
    const response = await fetch("http://localhost:5000/api/create-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();
    console.log("✅ Response received from backend:", data);

    if (response.ok && data.token) {
      console.log("🔐 Token exists, logging in user");
      login(data.user, data.token);
      navigate("/create-profile");
    } else if (response.ok) {
      console.log("⚠️ Response OK but no token, showing message");
      setMessage("Account created but login token missing.");
      setTimeout(() => navigate("/login"), 2000); // optional fallback
    } else {
      console.log("❌ Response not OK:", data.message);
      setMessage(data.message || "Signup failed.");
    }
  } catch (err) {
    console.error("🔥 Error signing up:", err);
    setMessage("Server error.");
  }
};


  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const newUser = {
  //     firstName,
  //     lastName,
  //     email,
  //     password,
  //   };

  //   try {
  //     const response = await fetch("http://localhost:5000/api/create-account", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newUser),
  //     });

  //     const data = await response.json();

  //     if (response.ok && data.token) {
  //       login(data.user, data.token); // 👈 Store token + user in context + localStorage
  //       navigate("/create-profile"); // ✅ You can now update profile with JWT
  //     } else {
  //       setMessage(data.message || "Signup failed.");
  //     }
  //   } catch (err) {
  //     console.error("Error signing up:", err);
  //     setMessage("Server error.");
  //   }
  // };


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