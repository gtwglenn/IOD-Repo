// features dummy data for AuthUserData


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

const AuthUserData = [
  { FirstName: "John", LastName: "Doe", UserEmail: "john@example.com" },
  { FirstName: "Jane", LastName: "Smith", UserEmail: "jane@example.com" },
];

export default function CreateAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const checkUserExists = (newUser, existingUsers) => {
    return existingUsers.some(
      (user) => user.UserEmail.toLowerCase() === newUser.UserEmail.toLowerCase()
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      FirstName: firstName,
      LastName: lastName,
      UserEmail: email,
    };

    if (checkUserExists(newUser, AuthUserData)) {
      setMessage("User with this email already exists.");
      return;
    }

    // Store user data temporarily or pass via state
    navigate("/create-profile", { state: { newUser } });
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
            Create New Account
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
            <TextField
              fullWidth
              required
              label="First Name"
              margin="normal"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              fullWidth
              required
              label="Last Name"
              margin="normal"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              fullWidth
              required
              label="Email"
              type="email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
              color="error"
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
