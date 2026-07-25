import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CheckCircle2, Package, ArrowRight, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Button } from '../components/Button';
import { formatPrice } from '../utils/formatters';

export function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state?.order;

  useEffect(() => {
    // Launch gold confetti celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F4D03F', '#AA820A', '#FFFFFF']
    });
  }, []);

  if (!order) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '20px' }}>No Order Found</h2>
        <Button variant="gold" onClick={() => navigate('/products')}>Return To Shop</Button>
      </div>
    );
  }

  return (
    <div style={{ padding: '60px 0 100px 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        {/* Animated Checkmark Header */}
        <div
          className="glass-card-gold"
          style={{
            padding: '50px 30px',
            textAlign: 'center',
            borderRadius: 'var(--radius-xl)',
            marginBottom: '40px'
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(212, 175, 55, 0.2)',
              border: '2px solid var(--gold-light)',
              color: 'var(--gold-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px auto',
              animation: 'bounceSoft 2s ease-in-out infinite'
            }}
          >
            <CheckCircle2 size={46} />
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', color: 'var(--text-white)', marginBottom: '12px' }}>
            Thank You For Your Order
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--gold-light)', fontWeight: 600, marginBottom: '20px' }}>
            Order Reference Code: <span style={{ textDecoration: 'underline' }}>{order.orderId}</span>
          </p>

          <p style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto', fontSize: '0.98rem', lineHeight: 1.7 }}>
            Your order has been received and is now being hand-packaged with custom ribbon and sample discovery vials. A confirmation email has been dispatched to <strong>{order.shipping.email || 'your email'}</strong>.
          </p>
        </div>

        {/* Order Details Breakdown */}
        <div className="glass-card" style={{ padding: '36px', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid var(--border-dark)', paddingBottom: '16px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--text-white)' }}>
                Order Summary Details
              </h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>Placed on {order.date}</span>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--gold-light)',
                fontSize: '0.85rem',
                fontWeight: 600
              }}
            >
              <Printer size={16} /> Print Receipt
            </button>
          </div>

          {/* Items Purchased List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '30px' }}>
            {order.items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.04)'
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '56px', height: '64px', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }}
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-white)' }}>{item.name}</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Qty: {item.quantity} × {formatPrice(item.price)}
                  </span>
                </div>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold-light)' }}>
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          {/* Shipping & Payment Summary Grid */}
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: 'var(--radius-md)' }}>
            <div>
              <h5 style={{ color: 'var(--gold-primary)', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '8px' }}>Shipping To</h5>
              <p style={{ color: 'var(--text-white)', fontWeight: 600, margin: 0 }}>{order.shipping.fullName}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: '4px 0 0 0' }}>
                {order.shipping.address}, {order.shipping.city}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: '2px 0 0 0' }}>{order.shipping.phone}</p>
            </div>

            <div>
              <h5 style={{ color: 'var(--gold-primary)', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '8px' }}>Payment Summary</h5>
              <p style={{ color: 'var(--text-white)', fontWeight: 600, margin: 0 }}>
                {order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Credit Card (Paid)'}
              </p>
              <p style={{ color: 'var(--gold-light)', fontSize: '1.2rem', fontWeight: 700, margin: '8px 0 0 0' }}>
                Total Paid: {formatPrice(order.totalAmount)}
              </p>
            </div>
          </div>

          {/* Return CTA Button */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Button
              variant="gold"
              size="lg"
              onClick={() => navigate('/products')}
              icon={ArrowRight}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;

