import React from 'react';
import { Plus, Minus } from 'lucide-react';

export function QuantitySelector({ quantity = 1, onIncrease, onDecrease, min = 1, max = 99 }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid var(--border-dark)',
        borderRadius: 'var(--radius-full)',
        padding: '4px 8px',
        gap: '10px'
      }}
    >
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: quantity <= min ? 'var(--text-dim)' : 'var(--text-white)',
          cursor: quantity <= min ? 'not-allowed' : 'pointer'
        }}
      >
        <Minus size={14} />
      </button>

      <span
        style={{
          minWidth: '24px',
          textAlign: 'center',
          fontWeight: '600',
          fontSize: '0.95rem',
          color: 'var(--text-white)'
        }}
      >
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: quantity >= max ? 'var(--text-dim)' : 'var(--text-white)',
          cursor: quantity >= max ? 'not-allowed' : 'pointer'
        }}
      >
        <Plus size={14} />
      </button>
    </div>
  );
}

export default QuantitySelector;

