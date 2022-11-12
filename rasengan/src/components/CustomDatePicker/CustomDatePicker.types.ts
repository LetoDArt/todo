export interface CustomDatePickerProps {
  value: Date | null,
  setValue: (event: Date | null) => void,
  label?: string,
  min?: Date,
  max?: Date,
}
