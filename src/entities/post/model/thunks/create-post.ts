import type { Dispatch } from 'react';
import { setLoading, setError, setPosts } from '../actions';
import { saveTodosToStorage } from '@/shared/lib/storage';
import type { Post } from '../types';


export const createTodoThunk =
  (post: Post) => async (dispatch: Dispatch<RootAction>, getState: () => RootState) => {
    dispatch(setLoading(true));
    try {
      const { list } = getState().post;
      const updatedPosts = [...list, post];
      await saveTodosToStorage(updatedPosts);
      dispatch(setPosts(updatedPosts));
    } catch (error) {
      dispatch(setError((error as Error).message || 'Ошибка при сохранении в хранилище'));
    } finally {
      dispatch(setLoading(false));
    }
  };
