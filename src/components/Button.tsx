import React from 'react';
import { Link } from 'vite-react-ssg';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  /** When set, renders a crawlable <Link> styled as a button. */
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const baseStyles =
  'inline-block px-8 py-3 transition-all duration-300 ease-in-out font-sans font-semibold tracking-wide text-sm uppercase';

const variants = {
  primary: 'bg-gold text-white hover:bg-[#8f754a] shadow-md',
  secondary: 'bg-navy text-white hover:bg-[#0f254a]',
  outline: 'border border-gold text-gold hover:bg-gold hover:text-white',
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  to,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const classes = `${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (to && !disabled) {
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
};

export default Button;
