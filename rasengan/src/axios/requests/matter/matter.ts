import { METHODS, URLs } from '../../consts';
import { axiosWrapper } from '../../axiosWrapper';


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
