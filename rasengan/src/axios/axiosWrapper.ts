import axios from 'axios';

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