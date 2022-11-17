import axios from 'axios';

import { ACCESS_TOKEN_KEY } from '../consts/storage.consts';
import { AxiosWrapperParams } from './types';


export const axiosWrapper = <D, Q, E>({
  method,
  url,
  data,
  query,
  extraHeaders,
}: AxiosWrapperParams<D, Q, E>) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`
  };
  const headers = {
    ...defaultHeaders,
    ...extraHeaders,
  };
  return axios({
    withCredentials: true,
    headers,
    method,
    url,
    data,
    params: query,
  });
};