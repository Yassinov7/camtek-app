'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { motion, HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'gold' | 'green' | 'whatsapp' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onAnimationEnd'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25',
  secondary: 'bg-secondary text-white hover:bg-orange-600 shadow-lg shadow-orange-500/25',
  gold: 'bg-gold text-white hover:bg-amber-600 shadow-lg shadow-amber-500/25',
  green: 'bg-green text-white hover:bg-green-600 shadow-lg shadow-green-500/25',
  whatsapp: 'bg-whatsapp text-white hover:bg-green-500 shadow-lg shadow-green-500/25',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const MotionLink = motion.create(Link);
const MotionButton = motion.button as React.ForwardRefExoticComponent<
  HTMLMotionProps<'button'> & React.RefAttributes<HTMLButtonElement>
>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, href, target, rel, ...props }, ref) => {
    const baseStyles = `inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
      return (
        <MotionLink
          href={href}
          target={target}
          rel={rel}
          className={baseStyles}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {children}
        </MotionLink>
      );
    }

    return (
      <MotionButton
        ref={ref}
        className={baseStyles}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...(props as HTMLMotionProps<'button'>)}
      >
        {children}
      </MotionButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
