import { axiosWrapper } from '../../axiosWrapper';

import { METHODS, URLs } from '../../consts';
import { MatterChanging, MatterCreation } from '../../../types/matters.types';


export const requestAllMatters = async (userId: string) => {
  const url = `${URLs.matter.all}/${userId}`;
  const { data } = await axiosWrapper<null, null, null>({
    method: METHODS.GET,
    url,
  });
  return data;
}

export const requestToChangeStatus = async (userId: string, active: boolean) => {
  const url = `${URLs.matter.changeStatus}/${userId}`;
  const { data } = await axiosWrapper<null, { active: boolean }, null>({
    method: METHODS.PATCH,
    url,
    query: {
      active
    }
  });
  return data;
}

export const requestToDelete = async (userId: string) => {
  const url = `${URLs.matter.delete}/${userId}`;
  const { data } = await axiosWrapper<null, null, null>({
    method: METHODS.DELETE,
    url,
  });
  return data;
}

export const requestToCreate = async (matter: MatterCreation) => {
  const url = URLs.matter.create;
  const { data } = await axiosWrapper<MatterCreation, null, null>({
    method: METHODS.POST,
    url,
    data: matter
  });
  return data;
}

export const requestToChange = async (matter: MatterChanging) => {
  const url = URLs.matter.update;
  const { data } = await axiosWrapper<MatterChanging, null, null>({
    method: METHODS.PUT,
    url,
    data: matter
  });
  return data;
}
