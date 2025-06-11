import type { Dispatch } from 'react';
import { setLoading, setError, setPosts } from '../actions';
import { savePostsToStorage } from '@/shared/lib/storage';
import type { Post } from '../types';

export const createPostThunk =
  (post: Post) => async (dispatch: Dispatch<RootAction>, getState: () => RootState) => {
    dispatch(setLoading(true));
    try {
      const { list } = getState().post;
      const updatedPosts = [post, ...list];
      await savePostsToStorage(updatedPosts);
      dispatch(setPosts(updatedPosts));
    } catch (error) {
      dispatch(setError((error as Error).message || 'Ошибка при сохранении в хранилище'));
    } finally {
      dispatch(setLoading(false));
    }
  };
