import * as Yup from 'yup';

import { getDateLimitations } from './Registration.utils';

import { formikErrorMessages } from '../consts';
import { TextFieldsSettings } from '../types';
import { RegistrationFormikValues } from './Registration.types';


const phoneRegExp = /^\+[0-9] \([0-9]{3}\) [0-9]{3} [0-9]{2}-[0-9]{2}$/;
const { min, max } = getDateLimitations();

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

export const registrationFormikInitialValues: RegistrationFormikValues = {
  email: '',
  password: '',
  repeatPassword: '',
  firstName: '',
  lastName: '',
  phone: '',
  gender: '',
  birthday: null,
}

export const formikValidationScheme = Yup.object({
  email: Yup.string().email(formikErrorMessages.email.nonValid).required(formikErrorMessages.common.empty),
  password: Yup.string()
    .max(30, formikErrorMessages.common.size)
    .min(6, formikErrorMessages.common.size)
    .required(formikErrorMessages.common.empty),
  repeatPassword: Yup.string()
    .test('repeatPassword', formikErrorMessages.password.match, (_, context) => context.parent.password === context.parent.repeatPassword )
    .required(formikErrorMessages.common.empty),
  firstName: Yup.string()
    .max(30, formikErrorMessages.common.size)
    .min(6, formikErrorMessages.common.size)
    .required(formikErrorMessages.common.empty),
  lastName: Yup.string()
    .max(30, formikErrorMessages.common.size)
    .min(6, formikErrorMessages.common.size)
    .required(formikErrorMessages.common.empty),
  phone: Yup.string().matches(phoneRegExp, formikErrorMessages.phone.nonValid).required(formikErrorMessages.common.empty),
  gender: Yup.string().required(formikErrorMessages.common.empty),
  birthday: Yup.date()
    .typeError(formikErrorMessages.birthday.nonValid)
    .required(formikErrorMessages.common.empty)
    .test('birthday', formikErrorMessages.birthday.size, (value) => (value ? value <= max && value >= min : false)),
})
