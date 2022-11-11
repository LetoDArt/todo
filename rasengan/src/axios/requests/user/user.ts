import { axiosWrapper } from '../../axiosWrapper';

import { METHODS, URLs } from '../../consts';
import { LoginUser } from '../../../types/user.types';


export const requestToLogin = async (user: LoginUser) => {
  const url = URLs.user.login;
  const { data } = await axiosWrapper<LoginUser, null, null>({
    method: METHODS.POST,
    url,
    data: user
  });
  return data;
}