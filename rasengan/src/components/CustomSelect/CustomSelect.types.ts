import { SelectChangeEvent } from '@mui/material';
import { FocusEventHandler } from 'react';


export interface SelectOptionTypes {
  id: string | number,
  value: string,
  label: string,
}

export interface CustomSelectProps {
  value: string,
  onChange: (event: SelectChangeEvent) => void,
  label: string,
  options: SelectOptionTypes[],
  onBlur?:  FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined,
  error?: string,
  name?: string,
}
