import { useThunkDispatch } from '@/shared/lib/store/use-thunk-dispatch';
import { Button } from '@/shared/ui/button';
import { Link } from '@/shared/ui/link';
import { List, Grid, Plus } from 'lucide-react';

export const BlogPanel = () => {
  const dispatch = useThunkDispatch();

  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold">Blog Articles</h2>
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={() => dispatch({ type: 'post/SET_VIEW', payload: 'list' })}
        >
          <List className="w-4 h-4 mr-1" /> List
        </Button>
        <Button
          variant="outline"
          onClick={() => dispatch({ type: 'post/SET_VIEW', payload: 'grid' })}
        >
          <Grid className="w-4 h-4 mr-1" /> Grid
        </Button>
        <Link to="/create">
          <Button>
            <Plus className="w-4 h-4 mr-1" /> Add Article
          </Button>
        </Link>
      </div>
    </div>
  );
};
