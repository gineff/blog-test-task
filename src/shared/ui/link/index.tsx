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
    if (to === 'back') {
      window.history.back();
    } else if (typeof to === 'string') {
      navigate(to);
    }
  };

  return (
    <a
      href={to === 'back' ? '#' : to}
      onClick={handleClick}
      className={className}
      rel={to === 'back' ? undefined : 'noopener noreferrer'}
      aria-label={to === 'back' ? 'Назад' : undefined}
    >
      {children}
    </a>
  );
};
