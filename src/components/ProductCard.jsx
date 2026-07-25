import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { RatingStars } from './RatingStars';
import { WishlistButton } from './WishlistButton';
import { Button } from './Button';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';

export function ProductCard({ product, onQuickView }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    if (onQuickView) onQuickView(product);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="product-card"
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      {/* Image Container & Overlays */}
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />

        {/* Badges */}
        <div className="product-badges">
          {product.discount && (
            <span className="badge-discount">-{product.discount}%</span>
          )}
          {product.isNew && <span className="badge-new">NEW</span>}
        </div>

        {/* Wishlist Heart Overlay */}
        <WishlistButton product={product} />

        {/* Hover Action Bar */}
        <div className="product-hover-actions">
          <Button
            variant="gold"
            size="sm"
            onClick={handleAddToCart}
            icon={ShoppingBag}
            className="flex-1"
          >
            Add to Cart
          </Button>
          <button
            type="button"
            onClick={handleQuickView}
            aria-label="Quick view product"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Eye size={16} />
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="product-content">
        <span className="product-brand">{product.brand}</span>
        <h3 className="product-title">{product.name}</h3>

        {/* Notes summary */}
        <p className="product-notes-summary">
          {product.topNotes ? product.topNotes.slice(0, 2).join(' • ') : product.category}
        </p>

        {/* Rating */}
        <div style={{ marginBottom: '14px' }}>
          <RatingStars rating={product.rating} reviewsCount={product.reviewsCount} size={14} />
        </div>

        {/* Price Row */}
        <div className="product-price-row">
          <div className="price-box">
            <span className="current-price">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <span className="old-price">{formatPrice(product.oldPrice)}</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;

