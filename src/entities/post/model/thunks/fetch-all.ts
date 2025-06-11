import type { Dispatch } from 'react';
import { setLoading, setError, setPosts, setLoaded } from '../actions';
import { loadPostsFromStorage } from '@/shared/lib/storage';
import type { Post } from '../types';

const mockArticles: Post[] = Array.from({ length: 23 }, (_, i) => ({
  id: String(i + 1),
  title: `Article ${i + 1}`,
  summary: `Summary for article ${i + 1}`,
  content: `<p1>Summary for article ${i + 1} </p1>`,
}));

export const fetchAllPosts = () => async (dispatch: Dispatch<RootAction>) => {
  dispatch(setLoading(true));
  try {
    const todos = await loadPostsFromStorage();
    if (!todos.length) {
      dispatch(setPosts([...mockArticles]));
    } else {
      dispatch(setPosts([...todos]));
    }
  } catch (error) {
    dispatch(setError((error as Error).message || 'Ошибка загрузки из хранилища'));
  } finally {
    //объединить в один статус
    dispatch(setLoading(false));
    dispatch(setLoaded());
  }
};
