import React from 'react';
import { motion } from 'framer-motion';

export function Button({
  children,
  variant = 'gold', // gold | outline-gold | glass
  size = 'md', // sm | md | lg
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon
}) {
  const getVariantClass = () => {
    switch (variant) {
      case 'outline-gold':
        return 'btn-outline-gold';
      case 'glass':
        return 'btn-glass';
      case 'gold':
      default:
        return 'btn-gold';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'btn-sm';
      case 'lg':
        return 'btn-lg';
      case 'md':
      default:
        return '';
    }
  };

  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.96 }}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${getVariantClass()} ${getSizeClass()} ${className}`}
      style={{ opacity: disabled ? 0.6 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
    >
      {Icon && <Icon size={18} />}
      {children}
    </motion.button>
  );
}

export default Button;

