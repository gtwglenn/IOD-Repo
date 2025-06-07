// import { Typography } from "@mui/material";
// export default function StoreLocator() {
//   return <Typography variant="h4">Welcome to Store Locator!</Typography>;
// }

// return "..." + <StoreSpoofer /> 


// + store spoofer 

// src/pages/StoreLocator.jsx
import { Box, Typography } from "@mui/material";
import StoreSpoofer from "../components/StoreSpoofer";

export default function StoreLocator() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Store Locator
      </Typography>
      <StoreSpoofer />
    </Box>
  );
}






// changes for GIT commit 