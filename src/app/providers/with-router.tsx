import { useState, Suspense, useEffect } from 'react';
import { Spinner } from '@/shared/ui/spinner';
import { NavigationContext } from '@/shared/lib/navigation/context';

export const withRouter = (Component: React.ComponentType) => () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  return (
    <NavigationContext.Provider value={{ navigate, currentPath }}>
      <Suspense fallback={<Spinner />}>
        <Component />
      </Suspense>
    </NavigationContext.Provider>
  );
};
