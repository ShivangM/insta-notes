import { BaseResponse } from './BaseResponse';
import { Category } from './Category';
import { User } from './User';

export interface Note {
  name: string;
  description: string;
  price: number;
  category: Category;
  created_by: User;
  created_at: string;
  thumbnail?: string;
  id: string;
  terms: string;
}

export interface PostsFetchedResponse extends BaseResponse {
  posts: Note[];
}

export interface PostFetchedResponse extends BaseResponse {
  post: Note;
}
