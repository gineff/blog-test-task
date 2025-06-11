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

const ARTICLES_PER_PAGE = 6;

const mockArticles: Post[] = Array.from({ length: 23 }, (_, i) => ({
  id: generateUUID(),
  title: `Article ${i + 1}`,
  summary: `Summary for article ${i + 1}`,
  content: `<p1>Summary for article ${i + 1} </p1>`,
}));

export const BlogWidget = () => {
  const page = useSelector(selectPage);
  const view = useSelector(selectView);

  const totalPages = Math.ceil(mockArticles.length / ARTICLES_PER_PAGE);
  const startIdx = (page - 1) * ARTICLES_PER_PAGE;
  const currentArticles = mockArticles.slice(startIdx, startIdx + ARTICLES_PER_PAGE);

  const Item = view === 'grid' ? PostItemCard : PostListItem;


  return (
    <div className="p-4 space-y-4 w-full">
      <BlogPanel />

      <ViewWrapper>
        {currentArticles.map((article) => (
          <Link key={article.id} to={`/post/${article.id}`}>
          <Item  title={article.title} summary={article.summary} />
          </Link>
        ))}
      </ViewWrapper>

      {/* Pagination */}
      <Pagination totalPages={totalPages} />
    </div>
  );
};
