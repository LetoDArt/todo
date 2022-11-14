import { UserWithoutId } from '../../types/user.types';


export interface RegistrationFormikValues {
  email: string,
  password: string,
  repeatPassword: string,
  firstName: string,
  lastName: string,
  phone: string,
  gender: string,
  birthday: Date | null,
}

export interface RegistrationFormProps {
  title?: string,
  readonly?: boolean,
  children: JSX.Element,
  submition: (user: UserWithoutId) => void
  initialStates: RegistrationFormikValues,
}
