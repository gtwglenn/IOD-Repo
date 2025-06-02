import { Box, TextField, MenuItem } from "@mui/material";

export default function ScheduleHeader({
  stores,
  selectedStore,
  selectedDate,
  onStoreChange,
  onDateChange,
}) {
  const isValidStore = stores.some((store) => store.id === selectedStore);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
      <TextField
        select
        label="Store"
        value={isValidStore ? selectedStore : ""}
        onChange={(e) => onStoreChange(Number(e.target.value))}
        sx={{ minWidth: 200 }}
      >
        {stores.length === 0 ? (
          <MenuItem value="">Loading stores...</MenuItem>
        ) : (
          stores.map((store) => (
            <MenuItem key={store.id} value={store.id}>
              {store.name || `Store ${store.id}`}
            </MenuItem>
          ))
        )}
      </TextField>

      {/* <TextField
        type="date"
        label="Date"
        value={selectedDate.toISOString().substring(0, 10)}
        onChange={(e) => onDateChange(new Date(e.target.value))}
        InputLabelProps={{ shrink: true }}
      /> */}
    </Box>
  );
}
