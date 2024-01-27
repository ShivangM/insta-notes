import { BaseResponse } from './BaseResponse';

export interface Category {
  name: string;
  slug: string;
  id: string;
}

export interface CategoriesFetchedResponse extends BaseResponse {
  categories: Category[];
}
