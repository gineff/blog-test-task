import { useStore } from './use-store';

export const useDispatch = () => {
  const { dispatch } = useStore();
  return dispatch;
};
