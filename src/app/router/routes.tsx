import { NotFound } from '@/pages/not-found';
import { HomePage } from '@/pages/home';
import { PostPage } from '@/pages/post';
import { ROUTES } from '@/shared/config';
import { BlogPage } from '@/pages/blog';
import { PostCreatePage } from '@/pages/post-create';
import { PostEditPage } from '@/pages/post-edit';

export const routes = [
  { path: ROUTES.HOME, component: <HomePage /> },
  { path: ROUTES.NOT_FOUND, component: <NotFound /> },
  { path: ROUTES.POST, component: <PostPage /> },
  { path: ROUTES.POST_CREATE, component: <PostCreatePage /> },
  { path: ROUTES.POST_EDIT, component: <PostEditPage /> },
  { path: ROUTES.BLOG, component: <BlogPage /> },
];
