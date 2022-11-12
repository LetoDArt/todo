import { axiosWrapper } from '../../axiosWrapper';

import { METHODS, URLs } from '../../consts';
import { ACCESS_TOKEN_KEY } from '../../../consts/storage.consts';
import { LoginUser, UserWithoutId } from '../../../types/user.types';


export const requestToLogin = async (user: LoginUser) => {
  const url = URLs.user.login;
  const { data } = await axiosWrapper<LoginUser, null, null>({
    method: METHODS.POST,
    url,
    data: user
  });
  localStorage.setItem(ACCESS_TOKEN_KEY, data.access_token)
  return data;
}

export const requestUserProfile = async () => {
  const url = URLs.user.profile;
  const { data } = await axiosWrapper<LoginUser, null, null>({
    method: METHODS.GET,
    url,
  });
  return data;
}

export const requestToRegisterUser = async (user: UserWithoutId) => {
  const url = URLs.user.register;
  const { data } = await axiosWrapper<LoginUser, null, null>({
    method: METHODS.POST,
    url,
    data: user
  });
  return data;
}
