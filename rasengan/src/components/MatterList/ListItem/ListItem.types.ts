export interface ListItemProps {
  title: string,
  description: string,
  date: string,
  checked: boolean,
  deleteMatter: (id: string) => void,
  id: string,
  changeStatus: (id: string, active: boolean) => void,
  hide: boolean,
}
