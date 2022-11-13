import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux.hooks';
import { userSelector } from '../../redux/selectors/user.selector';
import { userSlice } from '../../redux/reducers/User/user.reducer';
import { AUTHORIZATION_KEY } from '../../consts/storage.consts';

export const useGetProfileInitials = () => {
  const { user } = useAppSelector(userSelector);
  const { id, birthday, ...userWithoutId } = user;
  const initialStates = {
    ...userWithoutId,
    birthday: new Date(birthday),
    password: '',
    repeatPassword: '',
  }

  return {
    initials: `${user.firstName.charAt(0).toUpperCase() ?? 'F'}${user.lastName.charAt(0).toUpperCase() ?? 'U'}`,
    states: initialStates,
  }
}

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const { setAuthorization } = userSlice.actions;

  return () => {
    dispatch(setAuthorization(false))
    localStorage.removeItem(AUTHORIZATION_KEY)
  }
}
