import {
  selectPostById,
  selectPostError,
  selectPostLoading,
} from '@/entities/post/model/selectors';
import { fetchAllPosts } from '@/entities/post/model/thunks/fetch-all';
import { PostView } from '@/entities/post/ui/post-view';
import { useSelector } from '@/shared/lib/store/use-selector';
import { useThunkDispatch } from '@/shared/lib/store/use-thunk-dispatch';
import { Spinner } from '@/shared/ui/spinner';
import { Header } from '@/widgets/header';
import { useEffect } from 'react';

type PostPageProps = {
  params?: {
    id: string;
  };
};

export const PostPage: React.FC<PostPageProps> = ({ params }) => {
  const postId = params?.id || '';
  const dispatch = useThunkDispatch();
  const error = useSelector(selectPostError);
  const loading = useSelector(selectPostLoading);
  const post = useSelector((state: RootState) => selectPostById(state, postId));
  const hasLoaded = useSelector((state: RootState) => state.post.hasLoaded);

  useEffect(() => {
    if (!hasLoaded && !loading) {
      dispatch(fetchAllPosts());
    }
  }, []);

  if (loading) return <Spinner />;
  if (error) return <div>Ошибка: {error}</div>;

  if (!hasLoaded) return null;

  if (!post) {
    return <div>Статья не найдена</div>;
  }

  return (
    <>
      <Header />
      <PostView {...post} />
    </>
  );
};
