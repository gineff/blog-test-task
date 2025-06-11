import type { Dispatch } from 'react';
import { setLoading, setError, setPosts } from '../actions';
import { savePostsToStorage } from '@/shared/lib/storage';
import type { Post } from '../types';

export const deletePostThunk =
  (postId: string) => async (dispatch: Dispatch<RootAction>, getState: () => RootState) => {
    dispatch(setLoading(true));
    try {
      const { list } = getState().post;

      const postExists = list.some((post: Post) => post.id === postId);
      if (!postExists) {
        throw new Error('Пост не найден');
      }

      const updatedPosts = list.filter((post: Post) => post.id !== postId);

      await savePostsToStorage(updatedPosts);
      dispatch(setPosts(updatedPosts));
    } catch (error) {
      dispatch(setError((error as Error).message || 'Ошибка при удалении поста'));
    } finally {
      dispatch(setLoading(false));
    }
  };
