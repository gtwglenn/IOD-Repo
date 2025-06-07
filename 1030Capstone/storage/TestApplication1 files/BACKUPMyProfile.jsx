import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Box, Typography, Card, CardContent } from "@mui/material";

export default function MyProfile() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Typography variant="h6">No user is logged in.</Typography>;
  }

  return (
    <Box sx={{ p: 2 }}>
      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Welcome, {user.username}!
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> {user.email}
          </Typography>
          <Typography variant="body2">
            <strong>User ID:</strong> {user.id}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
