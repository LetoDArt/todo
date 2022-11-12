import { useAppSelector } from '../redux/hooks/redux.hooks';

import { userSelector } from '../redux/selectors/user.selector';

import { publicRoutes, userAllowedRoutes } from '../routes/Routes';


export const useRoutesDefiner = () => {
  const { authorized } = useAppSelector(userSelector)
  return authorized ? userAllowedRoutes : publicRoutes;
}
