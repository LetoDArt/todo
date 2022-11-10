import * as Yup from 'yup';

import { FormikLoginValues, TextFieldsSettings } from './Login.types';

const formikErrorMessages = {
  email: {
    empty: 'Email address must be specified',
    nonValid: 'Invalid email address',
  },
  password: {
    empty: 'Password must be specified',
    nonValid: 'Password must be less than 30 characters and more than 6'
  }
}

export const formikInitialState: FormikLoginValues = {
  email: '',
  password: '',
}

export const formikValidationScheme = Yup.object({
  email: Yup.string().email(formikErrorMessages.email.nonValid).required(formikErrorMessages.email.empty),
  password: Yup.string()
    .max(30, formikErrorMessages.password.nonValid)
    .min(6, formikErrorMessages.password.nonValid)
    .required(formikErrorMessages.password.empty),
})

export const textFields: TextFieldsSettings[] = [
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
