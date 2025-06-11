import type { Post } from '@/entities/post/model/types';
import { Pagination } from '@/features/pagination/';
import { useSelector } from '@/shared/lib/store/use-selector';
import { generateUUID } from '@/shared/lib';
import { selectPage, selectView } from '@/entities/post/model/selectors';
import { PostItemCard } from '@/entities/post/ui/post-item-card';
import { BlogPanel } from '@/features/blog-panel/ui/blog-panel';
import { PostListItem } from '@/entities/post/ui/post-list-item';
import { ViewWrapper } from './view-wrapper';
import { Link } from '@/shared/ui/link';
import type { FC } from 'react';

const ARTICLES_PER_PAGE = 6;

interface BlogWidgetProps {
  posts: Post[];
}

export const BlogWidget: FC<BlogWidgetProps> = ({ posts }) => {
  const page = useSelector(selectPage);
  const view = useSelector(selectView);

  const totalPages = Math.ceil(posts.length / ARTICLES_PER_PAGE);
  const startIdx = (page - 1) * ARTICLES_PER_PAGE;
  const currentArticles = posts.slice(startIdx, startIdx + ARTICLES_PER_PAGE);

  const Item = view === 'grid' ? PostItemCard : PostListItem;

  return (
    <div className="p-4 space-y-4 w-full">
      <BlogPanel />

      <ViewWrapper>
        {currentArticles.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <Item title={post.title} summary={post.summary} />
          </Link>
        ))}
      </ViewWrapper>

      {/* Pagination */}
      <Pagination totalPages={totalPages} />
    </div>
  );
};
