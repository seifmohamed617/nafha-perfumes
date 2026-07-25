import React from 'react';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QuantitySelector } from './QuantitySelector';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';

export function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr auto auto',
        gap: '20px',
        alignItems: 'center',
        padding: '16px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-dark)',
        borderRadius: 'var(--radius-md)',
        marginBottom: '14px'
      }}
    >
      {/* Item Image */}
      <Link to={`/product/${item.id}`} style={{ width: '80px', height: '95px', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
        <img
          src={item.image}
          alt={item.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Link>

      {/* Item Name & Details */}
      <div>
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--gold-primary)', letterSpacing: '0.1em' }}>
          {item.brand}
        </span>
        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--text-white)', margin: '2px 0 6px 0' }}>
          <Link to={`/product/${item.id}`}>{item.name}</Link>
        </h4>
        <span style={{ fontSize: '0.9rem', color: 'var(--gold-light)', fontWeight: 600 }}>
          {formatPrice(item.price)}
        </span>
      </div>

      {/* Quantity Control */}
      <div>
        <QuantitySelector
          quantity={item.quantity}
          onIncrease={() => updateQuantity(item.id, 1)}
          onDecrease={() => updateQuantity(item.id, -1)}
        />
      </div>

      {/* Total & Remove */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-white)', minWidth: '80px', textAlign: 'right' }}>
          {formatPrice(item.price * item.quantity)}
        </span>
        <button
          type="button"
          onClick={() => removeFromCart(item.id)}
          aria-label={`Remove ${item.name} from cart`}
          style={{
            color: 'var(--text-dim)',
            padding: '8px',
            borderRadius: 'var(--radius-full)',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#E53935')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;

