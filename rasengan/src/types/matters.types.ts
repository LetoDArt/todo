interface Matter {
  id: string;
  name: string;
  text: string;
  dateOfCreation: string;
  active: boolean;
  userId: string;
}

export type FullMatter = Matter;
export type ChangeMatter = Omit<Matter, 'name' | 'text' | 'dateOfCreation' | 'userId'>;
