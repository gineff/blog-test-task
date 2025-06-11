import type { Post } from '@/entities/post/model/types';
import { STORAGE_KEY } from '../config';

export const loadTodosFromStorage = async (): Promise<Post[]> => {
  await new Promise((res) => setTimeout(res, 300));
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveTodosToStorage = async (posts: Post[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch {}
};
