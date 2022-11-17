class DealItem {
  readonly id: string;
  readonly name: string;
  readonly text: string;
  readonly dateOfCreation: string;
  readonly active: boolean;
  readonly userId: string;
}

export type DealItemFull = DealItem;
export type UpdateDeal = Omit<DealItem, 'dateOfCreation' | 'userId'>;
export type DealItemWithoutId = Omit<DealItem, 'id' | 'dateOfCreation'>;

export interface RequestUserParams {
  id: string;
}
export interface RequestAllListQuery {
  active: boolean;
}
