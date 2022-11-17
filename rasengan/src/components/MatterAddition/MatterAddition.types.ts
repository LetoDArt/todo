import { MatterChanging, MatterFormik } from '../../types/matters.types';

export interface MatterAdditionProps {
  title: string,
  submitBtnText: string,
  open: boolean,
  openClose: () => void,
  submition: (matter: MatterFormik) => void,
  customValues?: MatterChanging
}

export interface TextFields {
  id: string,
  name: string,
  label: string,
  multiline: boolean,
  rows?: number,
}
