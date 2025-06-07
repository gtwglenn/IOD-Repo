import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

export default function AddTeacherModal({ isOpen, onClose, storeId, instruments }) {
  const [teacherName, setTeacherName] = useState("");
  const [instrumentId, setInstrumentId] = useState("");

  const handleSubmit = () => {
    console.log("Submit new teacher:", {
      name: teacherName,
      instrumentId,
      storeId,
    });
    // Reset form and close
    setTeacherName("");
    setInstrumentId("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add New Teacher</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Teacher Name"
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          select
          label="Instrument"
          value={instrumentId}
          onChange={(e) => setInstrumentId(e.target.value)}
          margin="normal"
        >
          {instruments.map((instr) => (
            <MenuItem key={instr.id} value={instr.id}>
              {instr.name}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
