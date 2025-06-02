



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

export default function StoreSpoofer() {
  const [selectedStore, setSelectedStore] = useState("Store000");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedStore(event.target.value);
  };

  const handleViewSchedule = () => {
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    navigate(`/MySchedule?store=${selectedStore}&date=${today}`);
  };

  return (
    <Box sx={{ mt: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Toolbar sx={{ width: "100%", justifyContent: "center", mb: 2 }}>
        <FormControl sx={{ minWidth: 200, mr: 2 }}>
          <InputLabel id="store-select-label">Select Store</InputLabel>
          <Select
            labelId="store-select-label"
            id="store-select"
            value={selectedStore !== "Store000" ? selectedStore : ""}
            label="Select Store"
            onChange={handleChange}
          >
            <MenuItem value="Store001">Store001</MenuItem>
            <MenuItem value="Store002">Store002</MenuItem>
            <MenuItem value="Store003">Store003</MenuItem>
          </Select>
        </FormControl>

        {/* Show button only if store selected */}
        {selectedStore !== "Store000" && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleViewSchedule}
          >
            View Store Schedule
          </Button>
        )}
      </Toolbar>

      <Typography variant="h6" sx={{ mb: 1 }}>
        Preview: {selectedStore}
        <br />
      </Typography>

      <Box
        component="img"
        src={`/src/images/${selectedStore}.png`}
        alt={selectedStore}
        sx={{
          width: "80%",
          maxWidth: 600,
          borderRadius: 2,
          boxShadow: 3,
          objectFit: "contain",
        }}
      />
    </Box>
  );
}









// // please ignore the component name, this component is totally legitimate 



// import { useState } from "react";
// import {
//   Box,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Toolbar,
//   Typography,
// } from "@mui/material";

// export default function StoreSpoofer() {
//   const [selectedStore, setSelectedStore] = useState("Store000");   // instead of using "" ? this works so just leave it
//                                                                       // Store000 does not appear in drop down so it's fine

//   const handleChange = (event) => {
//     setSelectedStore(event.target.value);
//   };

//   return (
//     <Box sx={{ mt: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <Toolbar sx={{ width: "100%", justifyContent: "center", mb: 2 }}>
//         <FormControl sx={{ minWidth: 200 }}>
//           <InputLabel id="store-select-label">Select Store</InputLabel>
//           <Select
//             labelId="store-select-label"
//             id="store-select"
//             value={selectedStore !== "Store000" ? selectedStore : ""}
//             label="Select Store"
//             onChange={handleChange}
//           >
//             <MenuItem value="Store001">Store001</MenuItem>
//             <MenuItem value="Store002">Store002</MenuItem>
//             <MenuItem value="Store003">Store003</MenuItem>
//           </Select>
//         </FormControl>
//       </Toolbar>

//       <Typography variant="h6" sx={{ mb: 1 }}>
//         Preview: {selectedStore} 
//         <br />
//         +LocatorToolbar: match functions on map
//       </Typography>

//       <Box
//         component="img"
//         src={`/src/images/${selectedStore}.png`}
//         //can't hot swap/edit ${selectedStore} --> useState sets default: adding+menu --> make new?? or replace files
//         alt={selectedStore}
//         sx={{
//           width: "80%",
//           maxWidth: 600,
//           borderRadius: 2,
//           boxShadow: 3,
//           objectFit: "contain",
//         }}
//       />
//     </Box>
//   );
// }