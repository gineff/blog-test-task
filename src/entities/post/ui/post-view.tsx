import type { FC } from 'react';

interface PostViewProps {
  id: string;
  title: string;
  summary: string;
  content: string; // HTML string
}

export const PostView: FC<PostViewProps> = ({ title, summary, content }) => {
  return (
    <article className="prose max-w-none p-4 bg-white rounded-lg shadow">
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600 text-sm mt-2">{summary}</p>
      </header>
      <section
        className="prose max-w-none text-gray-800"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
};
