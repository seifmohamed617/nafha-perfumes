import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Tag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { Button } from './Button';
import { formatPrice } from '../utils/formatters';

export function OrderSummary({ isCheckoutPage = false, onConfirmOrder }) {
  const navigate = useNavigate();
  const { subtotal, shipping, tax, grandTotal, cartItems } = useCart();
  const { addToast } = useToast();

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'ROYAL20' || promoCode.toUpperCase() === 'NAFHA') {
      const discountVal = Math.round(subtotal * 0.2);
      setDiscount(discountVal);
      addToast('VIP Promo Code applied! 20% Discount active.', 'success');
    } else {
      addToast('Invalid promo code. Try "ROYAL20"', 'info');
    }
  };

  const finalTotal = Math.max(0, grandTotal - discount);

  return (
    <div className="glass-card-gold" style={{ padding: '28px', borderRadius: 'var(--radius-lg)' }}>
      <h3
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.5rem',
          color: 'var(--text-white)',
          marginBottom: '20px',
          paddingBottom: '12px',
          borderBottom: '1px solid var(--border-gold)'
        }}
      >
        Order Summary
      </h3>

      {/* Breakdown List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
          <span>Subtotal</span>
          <span style={{ color: 'var(--text-white)' }}>{formatPrice(subtotal)}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
          <span>Estimated Tax (5%)</span>
          <span style={{ color: 'var(--text-white)' }}>{formatPrice(tax)}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
          <span>Express Luxury Shipping</span>
          <span style={{ color: shipping === 0 ? 'var(--gold-light)' : 'var(--text-white)' }}>
            {shipping === 0 ? 'COMPLIMENTARY' : formatPrice(shipping)}
          </span>
        </div>

        {discount > 0 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--gold-light)' }}>
            <span>VIP Promo Discount</span>
            <span>-{formatPrice(discount)}</span>
          </div>
        )}

        <div
          style={{
            margin: '12px 0',
            height: '1px',
            background: 'var(--border-gold)'
          }}
        />

        {/* Grand Total */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-white)' }}>Grand Total</span>
          <span style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold-light)' }}>
            {formatPrice(finalTotal)}
          </span>
        </div>
      </div>

      {/* Promo Code Input */}
      {!isCheckoutPage && (
        <form onSubmit={handleApplyPromo} style={{ marginTop: '24px', display: 'flex', gap: '8px' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Tag size={16} color="var(--gold-primary)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="كود الخصم (ROYAL20)"
              className="form-input"
              style={{ paddingLeft: '36px', fontSize: '0.85rem' }}
            />
          </div>
          <button type="submit" className="btn btn-outline-gold" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
            Apply
          </button>
        </form>
      )}

      {/* Action Button */}
      <div style={{ marginTop: '28px' }}>
        {isCheckoutPage ? (
          <Button
            variant="gold"
            size="lg"
            onClick={onConfirmOrder}
            disabled={cartItems.length === 0}
            className="w-full"
            style={{ width: '100%' }}
          >
            Confirm & Complete Order
          </Button>
        ) : (
          <Button
            variant="gold"
            size="lg"
            onClick={() => navigate('/checkout')}
            disabled={cartItems.length === 0}
            icon={ArrowRight}
            style={{ width: '100%' }}
          >
            Proceed to Checkout
          </Button>
        )}
      </div>

      {/* Security badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '18px',
          fontSize: '0.8rem',
          color: 'var(--text-dim)'
        }}
      >
        <ShieldCheck size={16} color="var(--gold-primary)" />
        256-bit Encrypted Checkout Guarantee
      </div>
    </div>
  );
}

export default OrderSummary;

