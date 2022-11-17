import React, { useId } from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';

import { CustomSelectProps } from './CustomSelect.types';


const CustomSelect = ({
  value,
  onChange,
  onBlur,
  label,
  options,
  error,
  name,
  disabled
}: CustomSelectProps) => {
  const id = useId();

  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel disabled={disabled} id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={`select with id: ${id}`}
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      >
        {options.map((one) => (
          <MenuItem key={one.id} value={one.value}>{one.label}</MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default CustomSelect;
