import type { Todo } from "./types";

export const selectTodoLoading = (state: RootState) => state.todo.loading;
export const selectTodoError = (state: RootState) => state.todo.error;
export const selectTodoAll = (state: RootState) => state.todo.list;
export const selectTodoActive = (state: RootState) => state.todo.list.filter((todo: Todo) => !todo.completed);
export const selectTodoCompleted = (state: RootState) => state.todo.list.filter((todo: Todo) => todo.completed);
