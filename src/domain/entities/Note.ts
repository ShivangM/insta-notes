import { BaseResponse } from './BaseResponse';
import { Category } from './Category';
import { User } from './User';

export interface NoteBase {
  name: string;
  description: string;
  category: Category;
  terms: string;
  thumbnail?: string;
  price: number;
}

export interface Note extends NoteBase {
  created_by: User;
  created_at: string;
  id: string;
}

export interface PostsFetchedResponse extends BaseResponse {
  posts: Note[];
}

export interface PostFetchedResponse extends BaseResponse {
  post: Note;
}
