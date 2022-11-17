import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { requestToRegisterUser } from '../axios/requests/user/user';

import { UserWithoutId } from '../types/user.types';


export const useErrorGetter = <T, E>(touched: T, errors: E) => (name: string) => {
  const hasBeenTouched = touched[name as keyof T]
  const error = errors[name as keyof E]
  return hasBeenTouched && error ? error : null
}

export const useRegisterRequester = () => {
  const navigate = useNavigate();

  return (clearedData: UserWithoutId) => {
    requestToRegisterUser(clearedData).then(() => {
      toast.success('Registration has been successful')
      navigate('/login')
    }).catch((e) => {
      toast.error(e?.response?.data?.message ?? 'unknown')
    })
  }
}
