import React from 'react';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

import { CustomDatePickerProps } from './CustomDatePicker.types';


const CustomDatePicker = ({
  value,
  setValue,
  label = 'Datepicker',
  min,
  max,
  onBlur,
  error,
  name,
  disabled
}: CustomDatePickerProps) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      label={label}
      value={value}
      minDate={min}
      maxDate={max}
      inputFormat='DD.MM.YYYY'
      onChange={(newValue) => {
        setValue(newValue);
      }}
      disabled={disabled}
      renderInput={(params) => (
        <TextField
          {...params}
          name={name}
          error={!!error}
          helperText={error}
          onBlur={onBlur}
        />
      )}
    />
  </LocalizationProvider>
);

export default CustomDatePicker;
