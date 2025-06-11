import type { FC } from 'react';
import { PostActions } from './post-actions';
import { Button } from '@/shared/ui/button';
import { Link } from '@/shared/ui/link';

interface PostViewProps {
  id: string;
  title: string;
  summary: string;
  content: string; // HTML string
}

export const PostView: FC<PostViewProps> = ({ id, title, summary, content }) => {
  return (
    <article className="relative prose min-w-[320px] w-[560px] max-w-none p-4 bg-white rounded-lg shadow flex flex-col min-h-[400px]">
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600 text-sm mt-2">{summary}</p>
      </header>
      <Button
        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center"
        variant="ghost"
        aria-label="Закрыть"
      >
        <Link to="back">
          <span className="text-2xl leading-none">&times;</span>
        </Link>
      </Button>

      <section
        className="prose max-w-none text-gray-800 flex-grow"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="mt-auto space-x-2">
        <Button variant="default"><Link to={`/post/${id}/edit`}>Редактировать</Link></Button>
        <Button variant="outline">Удалить</Button>
      </div>
    </article>
  );
};
