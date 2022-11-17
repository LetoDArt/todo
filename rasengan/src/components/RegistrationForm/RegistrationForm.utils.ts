import { textFieldsSignup } from '../../pages/Registration/Registration.consts';

export const textFieldsParser = (readonly: boolean) => {
  if (!readonly) return textFieldsSignup;
  return textFieldsSignup.filter((one) =>
    (one.name !== 'password' && one.name !== 'repeatPassword')
  )
}
