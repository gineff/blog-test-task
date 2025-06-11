import type { FC, HTMLAttributes } from 'react';

export type CardProps = HTMLAttributes<HTMLDivElement>

export const Card: FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
