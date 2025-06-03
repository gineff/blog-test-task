import type { TodoState, TodoAction } from '@/entities/todo/model/types';

export type RootState = {
  todo: TodoState;
};

export type RootAction = TodoAction ; // | OtherAction | AnotherAction

export type ReducersMapObject<S, A> = {
  [K in keyof S]: (state: S[K], action: A) => S[K];
};
