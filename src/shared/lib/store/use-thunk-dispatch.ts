import { useCallback } from 'react';
import type { ThunkDispatch, ThunkAction } from './types';
import { useStore } from './use-store';

export const useThunkDispatch = (): ThunkDispatch => {
  const { state, dispatch } = useStore();

  const thunkDispatch = useCallback(
    (action: RootAction | ThunkAction) => {
      if (typeof action === 'function') {
        return action(dispatch, () => state);
      }
      return dispatch(action);
    },
    [dispatch, state],
  ) as ThunkDispatch;

  return thunkDispatch;
};
