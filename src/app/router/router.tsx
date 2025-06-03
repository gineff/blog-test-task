import type { FC, PropsWithChildren } from 'react';
import { Route } from './route';
import { routes } from './routes';
import { NotFound } from '@/pages/not-found';

export const Router: FC<PropsWithChildren> = () => (
  <>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} component={route.component} />
    ))}
    <NotFound />
  </>
);
