import * as Yup from 'yup';

import { formikErrorMessages } from '../consts';
import { FormikLoginValues } from './Login.types';
import { TextFieldsSettings } from '../types';

export const formikInitialState: FormikLoginValues = {
  email: '',
  password: '',
}

export const formikValidationScheme = Yup.object({
  email: Yup.string().email(formikErrorMessages.email.nonValid).required(formikErrorMessages.common.empty),
  password: Yup.string()
    .max(30, formikErrorMessages.common.size)
    .min(6, formikErrorMessages.common.size)
    .required(formikErrorMessages.common.empty),
})

export const textFieldsLogin: TextFieldsSettings[] = [
  {
    type: 'text',
    variant: 'outlined',
    name: 'email',
    label: 'Email',
  },
  {
    type: 'password',
    variant: 'outlined',
    name: 'password',
    label: 'Password',
  },
]
