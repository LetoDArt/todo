import React, { useId } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { CustomSelectProps } from './CustomSelect.types';


const CustomSelect = ({ value, onChange, label, options }: CustomSelectProps) => {
  const id = useId();

  return (
    <FormControl fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={`select with id: ${id}`}
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map((one) => (
          <MenuItem key={one.id} value={one.value}>{one.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
