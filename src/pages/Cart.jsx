import React from 'react';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { CartItem } from '../components/CartItem';
import { OrderSummary } from '../components/OrderSummary';
import { EmptyState } from '../components/EmptyState';
import { useCart } from '../context/CartContext';

export function Cart() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px 0 90px 0' }}>
      <div className="container">
        <Breadcrumb items={[{ label: 'Shopping Cart' }]} />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '40px'
          }}
        >
          <div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', color: 'var(--text-white)' }}>
              Your Luxury Bag
            </h1>
            <p style={{ color: 'var(--text-muted)' }}>
              {cartItems.length} unique fragrances ready for luxury packaging.
            </p>
          </div>

          {cartItems.length > 0 && (
            <button
              type="button"
              onClick={clearCart}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--text-dim)',
                fontSize: '0.88rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}
            >
              <Trash2 size={16} /> Clear Bag
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <EmptyState
            title="Your Cart is Empty"
            description="Experience our hand-crafted fragrances. Add your desired perfumes to your luxury bag to complete your order."
            icon={ShoppingBag}
            actionText="Start Shopping"
            actionLink="/products"
          />
        ) : (
          <div className="grid-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '32px' }}>
            {/* Cart Items List */}
            <div>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}

              <div style={{ marginTop: '24px' }}>
                <Link
                  to="/products"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--gold-light)',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}
                >
                  <ArrowLeft size={16} /> Continue Exploring Fragrances
                </Link>
              </div>
            </div>

            {/* Order Summary Box */}
            <div>
              <OrderSummary />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

