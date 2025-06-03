import { useContext } from 'react';
import { NavigationContext } from '@/shared/lib/navigation/context';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link = ({ to, children, className, onClick }: LinkProps) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={`${className}`} rel="noopener noreferrer">
      {children}
    </a>
  );
};
