import type { FC } from 'react';
import { Card, CardContent } from '@/shared/ui/card';
import { PostActions } from './post-actions';

interface PostItemCardProps {
  id: string;
  title: string;
  summary: string;
}

export const PostItemCard: FC<PostItemCardProps> = ({ id, title, summary }) => {
  return (
    <Card className="w-full max-w-sm relative overflow-hidden">
      <PostActions postId={id} />
      <CardContent>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 line-clamp-3">{summary}</p>
      </CardContent>
    </Card>
  );
};
