import { TextFieldsSettings } from '../types';


export const textFieldsSignup: TextFieldsSettings[] = [
  {
    type: 'text',
    variant: 'outlined',
    name: 'firstName',
    label: 'First Name',
  },
  {
    type: 'text',
    variant: 'outlined',
    name: 'lastName',
    label: 'Last Name',
  },
  {
    type: 'password',
    variant: 'outlined',
    name: 'password',
    label: 'Password',
  },
  {
    type: 'password',
    variant: 'outlined',
    name: 'repeatPassword',
    label: 'Repeat Password',
  },
  {
    type: 'text',
    variant: 'outlined',
    name: 'email',
    label: 'Email',
  },
]
