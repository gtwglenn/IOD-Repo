// import { Typography } from "@mui/material";
// export default function StoreLocator() {
//   return <Typography variant="h4">Welcome to Store Locator!</Typography>;
// }

// return "..." + <StoreSpoofer /> 


// + store spoofer 

// src/pages/StoreLocator.jsx
import { Box, Typography } from "@mui/material";
import StoreSpoofer from "../components/StoreSpoofer";
import GoogleStoreSelector from "../components/GoogleStoreSelector"; 

export default function StoreLocator() {
  return (
    <div id="megaContainer">

      {/* div for store spoofer  */}
      {/* <div id="box1">
        <Box sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Store Locator
          </Typography>
          <StoreSpoofer />
        </Box>
      </div> */}

      {/* div for actual store locator  */}
      <div id="box2">
        <Box sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Google Maps
          </Typography>
          <GoogleStoreSelector />
        </Box>
      </div>

    </div> 
  );
}






// changes for GIT commit 