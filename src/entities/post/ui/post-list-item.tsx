import type { FC } from 'react';
import { PostActions } from './post-actions';

interface PostItemCardProps {
  title: string;
  summary: string;
}

export const PostListItem: FC<PostItemCardProps> = ({ title, summary }) => {
  return (
    <div className="p-4 border rounded-xl shadow-sm bg-white hover:bg-gray-50 transition relative overflow-hidden">
      <PostActions />
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-600">{summary}</p>
    </div>
  );
};
