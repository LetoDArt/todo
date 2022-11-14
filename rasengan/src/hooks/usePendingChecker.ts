import { useAppSelector } from '../redux/hooks/redux.hooks';
import { userSelector } from '../redux/selectors/user.selector';

export const usePendingChecker = () => {
  const { isLoading } = useAppSelector(userSelector)

  return isLoading;
}
