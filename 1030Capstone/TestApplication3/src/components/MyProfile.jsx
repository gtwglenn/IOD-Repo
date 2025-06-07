import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Box, Typography, Card, CardContent } from "@mui/material";
// import useAuthUser hook to fix cardcontent problem? maybe 
// mui grid not working just use card for now 

// export default function MyProfile() {
//   const  user  = useUserContext(AuthContext);

// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

export default function MyHome() {
  const { user } = useContext(AuthContext);

  // could do something like const first-name = -->splice user.username @ " " --> first half is first name / second half is last name 

  return (
    <Box sx={{ p: 4 }}>

      {/* don't listen to the coffee, do not change the sizing until later  */}

      <Typography variant="h4" gutterBottom>
        My Profile: 
      </Typography>

      {user ? (
        <Card sx={{ maxWidth: 400, mt: 2 }}>

          <CardContent>

            {/* <Typography variant="h6">Test Test Test</Typography> */}
            <Typography variant="h6"><strong>MyProfile for: {user.username}</strong></Typography>
            {/* <Typography><strong>Username:</strong> {user.username}</Typography> */}
            <Typography><strong>First Name:</strong> {user.firstName}</Typography>
            <Typography><strong>Last Name:</strong> {user.lastName}</Typography>
            <Typography><strong>Email:</strong> {user.email}</Typography>
            <Typography><strong>User ID:</strong> {user.id}</Typography>

            {/* THIS WAS WORKING LIKE TWO DAYS AGO WHAT HAPPENED??? */}

            {/* create separate component? hook? that can pull first_name, last_name, and store_location from db (based on userID) */}

            <Typography><strong>Test:</strong> {user.storeLocation} </Typography>

            {/* this really isn't even necessary but okay */}

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


// changes for GIT commit 