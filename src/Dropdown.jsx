import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function Dropdown({ label, value, onChange, options }) {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map((option, index) => (
        <MenuItem key={index} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;
