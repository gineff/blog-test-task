import type { PostState, PostAction } from './types';

export const initialState: PostState = {
  loading: false,
  error: null,
  view: 'grid',
  page: 1,
  list: [],
};

export const postReducer = (state = initialState, action: PostAction): PostState => {
  switch (action.type) {
    case 'post/LOADING':
      return { ...state, loading: action.payload, error: null };
    case 'post/SUCCESS':
      return { ...state, loading: false, list: action.payload, error: null };
    case 'post/ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'post/SET_VIEW':
      return { ...state, view: action.payload as PostState['view'] };
    case 'post/SET_PAGE':
      console.log({ ...state, page: action.payload });
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
