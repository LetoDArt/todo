import { axiosWrapper } from '../../axiosWrapper';

import { LoginProps } from './types';
import { METHODS, URLs } from '../../consts';


export const requestToLogin = async ({ email, password }: LoginProps) => {
  const url = URLs.user.login;
  const { data } = await axiosWrapper<LoginProps, null, null>({
    method: METHODS.POST,
    url,
    data: { email, password }
  });
  return data;
}