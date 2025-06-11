import type { Post } from "./types";

export const selectPostLoading = (state: RootState) => state.post.loading;
export const selectPostError = (state: RootState) => state.post.error;
export const selectPostAll = (state: RootState) => state.post.list;
export const selectPage = (state: RootState) => state.post.page;
export const selectView = (state: RootState) => state.post.view;
export const selectPosts = (state: RootState) => state.post.list;
export const selectPostById = (state: RootState, id: string) => {
  return state.post.list.find((post: Post) => post.id === id) || null;
};
