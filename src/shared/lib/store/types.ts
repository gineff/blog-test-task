import type { Dispatch } from 'react';

export type StoreContextValue = {
  state: RootState;
  dispatch: Dispatch<RootAction>;
};

export type ThunkAction<ReturnType = void> = (
  dispatch: Dispatch<RootAction>,
  getState: () => RootState,
) => ReturnType;

// Тип для thunk dispatch
export type ThunkDispatch = {
  <ReturnType>(thunkAction: ThunkAction<ReturnType>): ReturnType;
  (action: RootAction): RootAction;
};
