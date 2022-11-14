import { FocusEventHandler } from 'react';

export interface CustomDatePickerProps {
  value: Date | null,
  setValue: (event: Date | null) => void,
  label?: string,
  min?: Date,
  max?: Date,
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined,
  error?: string,
  name?: string,
  disabled?: boolean
}
