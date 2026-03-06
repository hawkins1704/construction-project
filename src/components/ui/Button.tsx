import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import type { SectionTheme } from '../../types/sections';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  theme?: SectionTheme;
  href?: string;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const themeStyles = {
  primary: {
    light: 'bg-earth text-cream hover:bg-forest',
    dark: 'bg-sage text-earth hover:bg-sage-dark',
  },
  secondary: {
    light: 'border-2 border-earth text-earth hover:bg-earth hover:text-cream',
    dark: 'border-2 border-sage text-sage hover:bg-sage hover:text-earth',
  },
};

export const Button = ({
  variant = 'primary',
  theme = 'light',
  href,
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors duration-200';
  const variantStyles = themeStyles[variant][theme];

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles} ${className}`}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};
