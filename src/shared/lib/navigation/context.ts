import { createContext } from 'react';

interface RouterContext {
  navigate: (path: string) => void;
  currentPath: string;
}

export const NavigationContext = createContext<RouterContext>({
  navigate: () => {
    throw new Error('No Router provider!');
  },
  currentPath: '/',
});
