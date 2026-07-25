import React, { useState } from 'react';
import { Trash2, Heart } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProductCard } from '../components/ProductCard';
import { EmptyState } from '../components/EmptyState';
import { QuickViewModal } from '../components/QuickViewModal';
import { Button } from '../components/Button';
import { useWishlist } from '../context/WishlistContext';

export function Wishlist() {
  const { wishlistItems, clearWishlist } = useWishlist();
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  return (
    <div style={{ padding: '40px 0 90px 0' }}>
      <div className="container">
        <Breadcrumb items={[{ label: 'Your Wishlist' }]} />

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
              Saved Fragrances
            </h1>
            <p style={{ color: 'var(--text-muted)' }}>
              You have {wishlistItems.length} items saved in your personal collection.
            </p>
          </div>

          {wishlistItems.length > 0 && (
            <button
              type="button"
              onClick={clearWishlist}
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
              <Trash2 size={16} /> Clear Wishlist
            </button>
          )}
        </div>

        {wishlistItems.length === 0 ? (
          <EmptyState
            title="Your Wishlist is Empty"
            description="You haven't saved any luxury fragrances to your wishlist yet. Browse our collection and click the heart icon on any perfume."
            icon={Heart}
            actionText="Discover Collection"
            actionLink="/products"
          />
        ) : (
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {wishlistItems.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        )}
      </div>

      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}

export default Wishlist;

