import { useStore } from './use-store';

export const useSelector = <TSelected>(selector: (state: RootState) => TSelected): TSelected => {
  const { state } = useStore();
  return selector(state);
};
