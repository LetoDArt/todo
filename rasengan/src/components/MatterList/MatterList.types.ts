import { FullMatter } from '../../types/matters.types';

export interface MatterListProps {
  matters: FullMatter[],
  deleteMatter: (id: string) => void,
  changeStatus: (id: string, active: boolean) => void,
  changeMatter: (id: string) => void,
}
