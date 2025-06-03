export interface TodoState {
  loading: boolean;
  error: string | null;
  list: Todo[];
}

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type { TodoAction } from './actions';
