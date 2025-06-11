export interface PostState {
  hasLoaded: boolean;
  loading: boolean;
  error: string | null;
  list: Post[];
  view: 'grid' | 'list';
  page: number;
}

export interface Post {
  id: string;
  title: string;
  summary: string;
  content: string;
}

export type { PostAction } from './actions';
