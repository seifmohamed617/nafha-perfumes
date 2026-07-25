import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useWishlist } from '../context/WishlistContext';

export function WishlistButton({ product, className = '', size = 20 }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const wishlisted = isInWishlist(product.id);

  const handleClick = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      onClick={handleClick}
      aria-label={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
      className={`wishlist-btn-overlay ${wishlisted ? 'active' : ''} ${className}`}
    >
      <Heart
        size={size}
        fill={wishlisted ? '#E53935' : 'none'}
        color={wishlisted ? '#E53935' : 'currentColor'}
      />
    </motion.button>
  );
}

export default WishlistButton;

