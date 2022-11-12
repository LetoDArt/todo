interface FullUser {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  birthday: string;
  phone: string;
}

export type UserWithoutId = Omit<FullUser, 'id'>
export type UserWithoutPassword = Omit<FullUser, 'password'>

export interface LoginUser {
  email: string,
  password: string,
}
