export interface PostState {
  loading: boolean;
  error: string | null;
  list: Post[];
  view: 'grid' | 'list';
  page: number;
}

export interface Post {
  id: string;
  title: string;
  content: boolean;
}

export type { PostAction } from './actions';
