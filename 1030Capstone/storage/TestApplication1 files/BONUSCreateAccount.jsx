import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

// Dummy list of previously created accounts to check against
const AuthUserData = [
  { FirstName: "John", LastName: "Doe", UserEmail: "john@example.com" },
  { FirstName: "Jane", LastName: "Smith", UserEmail: "jane@example.com" },
];

export default function CreateAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userInfo, setUserInfo] = useState([]); // dynamic array of created users
  const [message, setMessage] = useState("");

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

    // Add newUser to UserInfo array
    setUserInfo((prev) => [...prev, newUser]);
    setMessage("Account created successfully!");

    console.log("UserInfo array:", [...userInfo, newUser]);

    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
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
