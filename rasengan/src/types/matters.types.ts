interface Matter {
  id: string;
  name: string;
  text: string;
  dateOfCreation: string;
  active: boolean;
  userId: string;
}

export type FullMatter = Matter;
export type MatterCreation = Omit<Matter, 'id' | 'dateOfCreation'>
export type MatterChanging = Omit<Matter, 'userId' | 'dateOfCreation'>
export type MatterFormik= Omit<Matter, 'id' | 'dateOfCreation' | 'userId'>
export type ChangeMatter = Omit<Matter, 'name' | 'text' | 'dateOfCreation' | 'userId'>;
