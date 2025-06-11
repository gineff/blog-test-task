import type { FC, HTMLAttributes } from 'react';

export type CardContentProps = HTMLAttributes<HTMLDivElement>

export const CardContent: FC<CardContentProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};
