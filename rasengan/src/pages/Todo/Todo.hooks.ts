import { useCallback } from 'react';
import { changeStatus, deleteCurrentMatter } from '../../redux/reducers/Matter/matter.requests';
import { useAppDispatch } from '../../redux/hooks/redux.hooks';


export const useDeleteMatter = () => {
  const dispatch = useAppDispatch();
  
  return useCallback((id: string) => {
    dispatch(deleteCurrentMatter(id))
  }, []);
}

export const useChangeStatus = () => {
  const dispatch = useAppDispatch();

  return useCallback((id: string, active: boolean) => {
    dispatch(changeStatus({ id, active }))
  }, []);
}
