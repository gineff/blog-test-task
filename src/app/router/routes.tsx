import { NotFound } from '@/pages/not-found';
import { HomePage } from '@/pages/home';
import { TodoPage } from '@/pages/todo';
import { ROUTES } from '@/shared/config';

export const routes = [
  { path: ROUTES.HOME, component: <HomePage /> },
  { path: ROUTES.NOT_FOUND, component: <NotFound /> },
  { path: ROUTES.TODO, component: <TodoPage /> },
];
