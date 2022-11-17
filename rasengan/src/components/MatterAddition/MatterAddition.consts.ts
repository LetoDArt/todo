import * as Yup from 'yup';

import { TextFields } from './MatterAddition.types';
import { MatterFormik } from '../../types/matters.types';

const emptiness = 'Field must not be empty';

export const initialFormikValues: MatterFormik = {
  name: '',
  text: '',
  active: true,
}

export const validationScheme = Yup.object({
  name: Yup.string().required(emptiness),
  text: Yup.string().required(emptiness),
});

export const textFields: TextFields[] = [
  {
    id: 'name',
    name: 'name',
    label: 'Name',
    multiline: false,
  },
  {
    id: 'text',
    name: 'text',
    label: 'Description',
    multiline: true,
    rows: 10,
  },
]
