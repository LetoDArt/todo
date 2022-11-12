import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../redux/hooks/redux.hooks';

import { AUTHORIZATION_KEY } from '../consts/storage.consts';
import { userSlice } from '../redux/reducers/User/user.reducer';
import { userSelector } from '../redux/selectors/user.selector';
import { getUserProfile } from '../redux/reducers/User/user.requests';


export const useGetterAuthorizationOnMount = () => {
  const dispatch = useAppDispatch();

  const { authorized } = useAppSelector(userSelector);

  const { setAuthorization } = userSlice.actions


  useEffect(() => {
    const authorization = JSON.parse(localStorage.getItem(AUTHORIZATION_KEY) ?? 'false');
    dispatch(setAuthorization(authorization));
  }, []);

  useEffect(() => {
    if (authorized) dispatch(getUserProfile());
  }, [authorized])
}