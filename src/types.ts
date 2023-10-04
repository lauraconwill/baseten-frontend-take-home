export interface Model {
  id: string;
  modified: number;
  type: string;
}

export interface ModelWithAuthor extends Model {
  author: string;
}

export interface SearchResultEntity {
  item: Model | ModelWithAuthor;
  refIndex: number;
}
