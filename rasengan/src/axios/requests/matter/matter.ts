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
