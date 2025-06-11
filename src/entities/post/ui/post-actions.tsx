import type { FC, MouseEvent } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { useThunkDispatch } from '@/shared/lib/store/use-thunk-dispatch';
import { Link } from '@/shared/ui/link';
import { deletePostThunk } from '../model/thunks/delete-post';

interface PostActionsProps {
  postId: string;
  className?: string;
}

export const PostActions: FC<PostActionsProps> = ({ className, postId }) => {
  const dispatch = useThunkDispatch();

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(deletePostThunk(postId));
  };

  return (
    <div className={`absolute top-3 right-3 flex ${className || ''}`}>
      <Button variant="ghost" size="sm">
        <Link to={`/post/${postId}/edit`}>
          <Pencil className="w-3 h-3" />
        </Link>
      </Button>
      <Button variant="ghost" size="sm" onClick={handleDelete}>
        <Trash2 className="w-3 h-3 text-red-500" />
      </Button>
    </div>
  );
};
