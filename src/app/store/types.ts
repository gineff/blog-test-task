import type { PostState, PostAction } from '@/entities/post/model/types';

export type RootState = {
  todo: PostState;
};

export type RootAction = PostAction; // | OtherAction | AnotherAction

export type ReducersMapObject<S, A> = {
  [K in keyof S]: (state: S[K], action: A) => S[K];
};
