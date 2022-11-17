import { UserWithoutId } from '../../types/user.types';
import { RegistrationFormikValues } from '../../components/RegistrationForm/RegistrationForm.types';


export const getDateLimitations = () => {
  const now = new Date();

  return {
    min: new Date(now.getFullYear() - 90, now.getMonth(), now.getDate()),
    max: new Date(now.getFullYear() - 18, now.getMonth(), now.getDate()),
  }
}

export const formDataForRequest = (user: RegistrationFormikValues): UserWithoutId => {
  const {
    birthday,
    repeatPassword,
    ...last
  } = user;
  const date = birthday ? new Date(birthday.toISOString()) : null;

  return {
    birthday: date?.toISOString() ?? '',
    ...last,
  }
}
