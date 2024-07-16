import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function Dropdown({ label, value, onChange }) {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        value={value}
        label={label}
        onChange={onChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Option 1</MenuItem>
        <MenuItem value={20}>Option 2</MenuItem>
        <MenuItem value={30}>Option 3</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Dropdown;
