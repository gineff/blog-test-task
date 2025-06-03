import { generateUUID } from '@/shared/lib';
import type { TodoState, TodoAction } from './types';

export const initialState: TodoState = {
  loading: false,
  error: null,
  list: [],
};

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'todo/LOADING':
      return { ...state, loading: true, error: null };
    case 'todo/SUCCESS':
      return { ...state, loading: false, list: action.payload, error: null };
    case 'todo/ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'todo/ADD_TODO':
      return {
        ...state,
        list: [...state.list, { id: generateUUID(), title: action.payload, completed: false }],
      };
    case 'todo/DELETE_TODO':
      return { ...state, list: state.list.filter((todo) => todo.id !== action.payload) };
    case 'todo/EDIT_TODO':
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo,
        ),
      };
    case 'todo/TOGGLE_TODO':
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo,
        ),
      };
    case 'todo/TOGGLE_ALL':
      const allCompleted = state.list.every((todo) => todo.completed);
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.completed === allCompleted ? { ...todo, completed: !allCompleted } : todo,
        ),
      };
    case 'todo/CLEAR_COMPLETED':
      return {
        ...state,
        list: state.list.filter((todo) => !todo.completed),
      };
    default:
      return state;
  }
};
