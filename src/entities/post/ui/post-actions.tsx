import type { FC } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { useThunkDispatch } from '@/shared/lib/store/use-thunk-dispatch';

interface PostActionsProps {
  className?: string;
}

export const PostActions: FC<PostActionsProps> = ({ className }) => {
  const dispatch = useThunkDispatch();

  const handleEdit = () => {
    dispatch({ type: 'post/Edit', payload: 'edit' });
  };

  const handleDelete = () => {
    dispatch({ type: 'post/Delete', payload: 'edit' });
  };

  return (
    <div className={`absolute top-3 right-3 flex ${className || ''}`}>
      <Button variant="ghost" size="sm" onClick={handleEdit}>
        <Pencil className="w-3 h-3" />
      </Button>
      <Button variant="ghost" size="sm" onClick={handleDelete}>
        <Trash2 className="w-3 h-3 text-red-500" />
      </Button>
    </div>
  );
};
