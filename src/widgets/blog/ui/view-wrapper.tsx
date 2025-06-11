import { useSelector } from '@/shared/lib/store/use-selector';
import type { FC, PropsWithChildren } from 'react';
import { selectView } from '@/entities/post/model/selectors';

export const ViewWrapper: FC<PropsWithChildren> = ({ children }) => {
  const view = useSelector(selectView);

  if (view === 'grid') {
    return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{children}</div>;
  }

  return <div className="space-y-2">{children}</div>;
};
