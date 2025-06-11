import { selectPage } from '@/entities/post/model/selectors';
import { useSelector } from '@/shared/lib/store/use-selector';
import { useThunkDispatch } from '@/shared/lib/store/use-thunk-dispatch';
import { Button } from '@/shared/ui/button';

type Props = {
  totalPages: number;
};

export const Pagination = ({ totalPages }: Props) => {
  const dispatch = useThunkDispatch();
  const page = useSelector(selectPage);

  const goToPage = (newPage: number) => {
    dispatch({ type: 'post/SET_PAGE', payload: newPage });
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      <Button onClick={() => goToPage(page - 1)} disabled={page === 1} variant="outline">
        Previous
      </Button>
      <span className="text-sm text-gray-600">
        Page {page} of {totalPages}
      </span>
      <Button onClick={() => goToPage(page + 1)} disabled={page === totalPages} variant="outline">
        Next
      </Button>
    </div>
  );
};
