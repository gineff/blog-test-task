import type { Dispatch } from 'react';
import { setLoading, setError, setPosts } from '../actions';
import { savePostsToStorage } from '@/shared/lib/storage';
import type { Post } from '../types';

export const updatePostThunk =
  (updatedPost: Post) => async (dispatch: Dispatch<RootAction>, getState: () => RootState) => {
    dispatch(setLoading(true));
    try {
      const { list } = getState().post;

      const postIndex = list.findIndex((post: Post) => post.id === updatedPost.id);

      if (postIndex === -1) {
        throw new Error('Пост не найден');
      }

      const updatedPosts = [...list.slice(0, postIndex), updatedPost, ...list.slice(postIndex + 1)];

      await savePostsToStorage(updatedPosts);
      dispatch(setPosts(updatedPosts));
    } catch (error) {
      dispatch(setError((error as Error).message || 'Ошибка при обновлении поста'));
    } finally {
      dispatch(setLoading(false));
    }
  };
