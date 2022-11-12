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
}: CustomDatePickerProps) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      label={label}
      value={value}
      minDate={min}
      maxDate={max}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
);

export default CustomDatePicker;
