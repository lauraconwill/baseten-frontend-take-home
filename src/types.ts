export interface Model {
  id: string;
  modified: number;
  type: string;
  author?: string;
}

export interface SearchResultEntity {
  item: Model;
  refIndex: number;
}
