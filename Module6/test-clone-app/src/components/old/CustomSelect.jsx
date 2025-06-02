import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function CustomSelect({label, value, onCustomChange, options, width}) {

    const menuOptions = options.map(option => (
        <MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>
    ))

    const selectWidth = width ? {sx: {width: width}} : {fullWidth: true}

    return (
        <FormControl {...selectWidth}>
            <InputLabel id="custom-select-label">{label}</InputLabel>
            <Select
                labelId="custom-select-label"
                id="custom-select"
                value={value}
                label={label}
                onChange={onCustomChange}
            >
                {menuOptions}
            </Select>
        </FormControl>        
    )
}

export default CustomSelect;