import { selectPostError, selectPostLoading, selectPosts } from '@/entities/post/model/selectors';
import { fetchAllPosts } from '@/entities/post/model/thunks/fetch-all';
import { useSelector } from '@/shared/lib/store/use-selector';
import { useThunkDispatch } from '@/shared/lib/store/use-thunk-dispatch';
import { Spinner } from '@/shared/ui/spinner';
import { BlogWidget } from '@/widgets/blog';
import { Header } from '@/widgets/header';
import { useEffect } from 'react';

export const BlogPage = () => {
  const dispatch = useThunkDispatch();
  const posts = useSelector(selectPosts);

  const loading = useSelector(selectPostLoading);
  const error = useSelector(selectPostError);
  const hasLoaded = useSelector((state: RootState) => state.post.hasLoaded);

  useEffect(() => {
    if (!hasLoaded && !loading) {
      dispatch(fetchAllPosts());
    }
  }, []);

  if (loading) return <Spinner />;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <>
      <Header />
      <BlogWidget posts={posts} />
    </>
  );
};
