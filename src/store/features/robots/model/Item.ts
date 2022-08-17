export interface ProtoItem {
  item: string;
  userItem: string;
}

export interface Item extends ProtoItem {
  id: string;
}

export type Items = Item[];
