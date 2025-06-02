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
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Logging in with:", { email, password });
//     // Add your auth logic here
//     fetch("http://localhost:5000/api/login", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ email, password }),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     if (data.success) {
//       // You can store the user info or token in localStorage or context
//       localStorage.setItem("user", JSON.stringify(data.user));
//       navigate("/home"); // Redirect to home page
//     } else {
//       alert("Login failed: " + data.message);
//     }
//   })
//   .catch((err) => {
//     console.error("Login error:", err);
//     alert("An error occurred during login.");
//   });

//   };


const { login } = useContext(AuthContext);

const handleSubmit = (e) => {
  e.preventDefault();

  fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        login(data.user, data.token); // 👈 update context
        navigate("/home");
      } else {
        alert("Login failed: " + data.message);
      }
    })
    .catch((err) => {
      console.error("Login error:", err);
      alert("An error occurred during login.");
    });
};

// const handleSubmit = (e) => {
//   e.preventDefault();

//   fetch("http://localhost:5000/api/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       if (data.success) {
//         // Store user and token
//         localStorage.setItem("user", JSON.stringify(data.user));
//         localStorage.setItem("token", data.token);

//         // Redirect to home page
//         navigate("/home");
//       } else {
//         alert("Login failed: " + data.message);
//       }
//     })
//     .catch((err) => {
//       console.error("Login error:", err);
//       alert("An error occurred during login.");
//     });
// };


  const handleCreateAccount = () => {
    navigate("/create-account");
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
            Music Schedule Bot 9000
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
            <TextField
              fullWidth
              required
              label="Email"
              type="email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              required
              label="Password"
              type="password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            {/* Create New Account button inside login box */}
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              onClick={handleCreateAccount}
            >
              Create New Account
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
