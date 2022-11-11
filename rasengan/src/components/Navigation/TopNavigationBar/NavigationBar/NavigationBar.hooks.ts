import { useAppSelector } from '../../../../redux/hooks/redux.hooks';
import { userSelector } from '../../../../redux/selectors/user.selector';

import { PUBLIC_LINKS, USER_ALLOWED_LINKS } from './NavigationBar.consts';


export const useNavigationLinks = () => {
  const { authorized } = useAppSelector(userSelector);
  return authorized ? USER_ALLOWED_LINKS : PUBLIC_LINKS;
}
