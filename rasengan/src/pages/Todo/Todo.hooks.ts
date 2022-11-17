import { useCallback } from 'react';

import {
  changeMatter,
  changeStatus,
  createNewOne,
  deleteCurrentMatter
} from '../../redux/reducers/Matter/matter.requests';
import { useAppDispatch } from '../../redux/hooks/redux.hooks';

import { MatterFormik } from '../../types/matters.types';


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

export const useNewMatterCreator = (userId: string) => {
  const dispatch = useAppDispatch();

  return useCallback((matter: MatterFormik) => {
    dispatch(createNewOne({ userId, ...matter }));
  }, [userId]);
}

export const useNewMatterChanger = (id: string) => {
  const dispatch = useAppDispatch();

  return useCallback((matter: MatterFormik) => {
    dispatch(changeMatter({ id, ...matter }));
  }, [id]);
}
