import { useReducer, type ReactNode } from 'react';
import { initialState } from './initial-state';
import { todoReducer } from '@/entities/todo/model/reducer';
import type { TodoState } from '@/entities/todo/model/types';
import type { ReducersMapObject, RootAction } from './types';
import { StoreContext } from '@/shared/lib/store/context';

const combineReducers =
  <S, A>(reducers: ReducersMapObject<S, A>) =>
  (state: S, action: A): S => {
    const newState = {} as S;
    for (const key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  };

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [state, dispatch] = useReducer(
    combineReducers<{ todo: TodoState;}, RootAction>({
      todo: todoReducer,
    }),
    initialState,
  );

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};
