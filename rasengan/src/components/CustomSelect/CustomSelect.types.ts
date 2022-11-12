import { SelectChangeEvent } from '@mui/material';


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
}
