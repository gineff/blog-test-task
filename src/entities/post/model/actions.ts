import type { Post } from './types';

//лучше один статус для isLoading Error Loaded
export const setLoading = (isLoading: boolean) => ({
  type: 'post/LOADING' as const,
  payload: isLoading,
});

export const setLoaded = () => ({ type: 'post/LOADED' as const });

export const setPosts = (list: Post[]) => ({ type: 'post/SET_POSTS' as const, payload: list });

export const setError = (error: string) => ({ type: 'post/ERROR' as const, payload: error });

export const setView = (view: string) => ({ type: 'post/SET_VIEW' as const, payload: view });

export const setPage = (page: number) => ({ type: 'post/SET_PAGE' as const, payload: page });

export type PostAction =
  | ReturnType<typeof setLoading>
  | ReturnType<typeof setLoaded>
  | ReturnType<typeof setPosts>
  | ReturnType<typeof setError>
  | ReturnType<typeof setView>
  | ReturnType<typeof setPage>;
