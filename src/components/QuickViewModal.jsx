import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Modal } from './Modal';
import { RatingStars } from './RatingStars';
import { WishlistButton } from './WishlistButton';
import { QuantitySelector } from './QuantitySelector';
import { Button } from './Button';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';

export function QuickViewModal({ product, isOpen, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  const handleViewDetails = () => {
    onClose();
    navigate(`/product/${product.id}`);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="850px">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '30px' }}>
        {/* Left: Image */}
        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            height: '420px',
            background: '#141414'
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <WishlistButton product={product} style={{ top: '14px', right: '14px' }} />
        </div>

        {/* Right: Product Details */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--gold-primary)', letterSpacing: '0.15em' }}>
            {product.brand}
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--text-white)', margin: '4px 0 10px 0' }}>
            {product.name}
          </h2>

          <div style={{ marginBottom: '16px' }}>
            <RatingStars rating={product.rating} reviewsCount={product.reviewsCount} size={16} />
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold-light)' }}>
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span style={{ fontSize: '1rem', color: 'var(--text-dim)', textDecoration: 'line-through' }}>
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '20px', lineHeight: 1.6 }}>
            {product.description}
          </p>

          {/* Fragrance Notes Highlights */}
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px 16px', borderRadius: 'var(--radius-md)', marginBottom: '20px' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--gold-primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>
              Fragrance Notes Pyramid
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-white)' }}>
              <strong>Top:</strong> {product.topNotes?.join(', ')}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-white)', marginTop: '4px' }}>
              <strong>Heart:</strong> {product.middleNotes?.join(', ')}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-white)', marginTop: '4px' }}>
              <strong>Base:</strong> {product.baseNotes?.join(', ')}
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <QuantitySelector
              quantity={quantity}
              onIncrease={() => setQuantity((q) => q + 1)}
              onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
            />
            <Button variant="gold" onClick={handleAddToCart} icon={ShoppingBag} style={{ flex: 1 }}>
              Add to Cart
            </Button>
          </div>

          <button
            type="button"
            onClick={handleViewDetails}
            style={{
              fontSize: '0.88rem',
              color: 'var(--gold-light)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            }}
          >
            View Full Product Page <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default QuickViewModal;

