import { useAppSelector } from '../redux/hooks/redux.hooks';
import { userSelector } from '../redux/selectors/user.selector';
import { matterSelector } from '../redux/selectors/matter.selector';

export const usePendingChecker = () => {
  const { isLoading: user } = useAppSelector(userSelector);
  const { isLoading: matter } = useAppSelector(matterSelector)

  return user || matter;
}
