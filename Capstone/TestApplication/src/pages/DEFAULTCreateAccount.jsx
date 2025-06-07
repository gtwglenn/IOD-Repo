import { useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating account with:", { firstName, lastName, email });
    // Add your create account logic here
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
        </Paper>
      </Box>
    </Container>
  );
}
