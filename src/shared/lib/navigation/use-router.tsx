import { useContext } from 'react';
import { NavigationContext } from './context';

export const useRouter = () => {
  const { navigate, currentPath } = useContext(NavigationContext);
  return { navigate, currentPath };
};
