import type { FC, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'default' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg' | 'icon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
}

export const Button: FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  disabled,
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses =
    variant === 'default'
      ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
      : variant === 'outline'
        ? 'border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400'
        : 'text-gray-700 hover:bg-gray-100 focus:ring-gray-300'; // ghost

  const sizeClasses =
    size === 'sm'
      ? 'px-2 py-1 text-xs'
      : size === 'lg'
        ? 'px-5 py-3 text-base'
        : size === 'icon'
          ? 'w-9 h-9 p-0'
          : 'px-4 py-2 text-sm'; // md (default)

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const combinedClassName = [base, variantClasses, sizeClasses, disabledClasses, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={combinedClassName} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
