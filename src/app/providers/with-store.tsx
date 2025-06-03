import { Suspense } from 'react';
import { Spinner } from '@/shared/ui/spinner';
import { StoreProvider } from '../store';

export const withStore = (Component: React.ComponentType) => () => {
  return (
    <StoreProvider>
      <Suspense fallback={<Spinner />}>
        <Component />
      </Suspense>
    </StoreProvider>
  );
};
