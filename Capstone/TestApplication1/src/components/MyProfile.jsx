import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Box, Typography, Card, CardContent } from "@mui/material";

export default function MyHome() {
  const { user } = useContext(AuthContext);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Profile: 
      </Typography>

      {user ? (
        <Card sx={{ maxWidth: 400, mt: 2 }}>
          <CardContent>
            <Typography variant="h6">Test Test Test</Typography>
            <Typography><strong>Username:</strong> {user.username}</Typography>
            <Typography><strong>Email:</strong> {user.email}</Typography>
            <Typography><strong>User ID:</strong> {user.id}</Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="body1" color="text.secondary">
          No user data available.
        </Typography>
      )}
    </Box>
  );
}
