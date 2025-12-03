import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = "button",
  disabled = false
}) => {
  const baseStyles = "px-8 py-3 transition-all duration-300 ease-in-out font-sans font-semibold tracking-wide text-sm uppercase";
  
  const variants = {
    primary: "bg-gold text-white hover:bg-[#8f754a] shadow-md",
    secondary: "bg-navy text-white hover:bg-[#0f254a]",
    outline: "border border-gold text-gold hover:bg-gold hover:text-white"
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
