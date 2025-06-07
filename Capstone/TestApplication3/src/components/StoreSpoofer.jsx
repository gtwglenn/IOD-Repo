// src/components/StoreSpoofer.jsx
import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

export default function StoreSpoofer() {
  const [selectedStore, setSelectedStore] = useState("Store000");

  const handleChange = (event) => {
    setSelectedStore(event.target.value);
  };

  return (
    <Box sx={{ mt: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Toolbar sx={{ width: "100%", justifyContent: "center", mb: 2 }}>
        <FormControl sx={{ minWidth: 200 }}>
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
      </Toolbar>

      <Typography variant="h6" sx={{ mb: 1 }}>
        Preview: {selectedStore} 
        <br />
        +LocatorToolbar: match functions on map
      </Typography>

      <Box
        component="img"
        src={`/src/images/${selectedStore}.png`}
        //can't hot swap/edit ${selectedStore} --> useState sets default: adding+menu --> make new?? or replace files
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

