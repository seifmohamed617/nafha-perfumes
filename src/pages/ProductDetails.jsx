import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ShoppingBag, ShieldCheck, Truck, RefreshCw, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { RatingStars } from '../components/RatingStars';
import { WishlistButton } from '../components/WishlistButton';
import { QuantitySelector } from '../components/QuantitySelector';
import { ProductCard } from '../components/ProductCard';
import { QuickViewModal } from '../components/QuickViewModal';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import { useCart } from '../context/CartContext';
import { perfumes } from '../data/perfumes';
import { formatPrice } from '../utils/formatters';

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('notes'); // notes | description | reviews
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const product = perfumes.find((p) => p.id === Number(id)) || perfumes[0];
  const relatedProducts = perfumes.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div style={{ padding: '40px 0 90px 0' }}>
      <div className="container">
        {/* Breadcrumb Path */}
        <Breadcrumb
          items={[
            { label: 'All Fragrances', link: '/products' },
            { label: product.category, link: `/products?category=${product.category}` },
            { label: product.name }
          ]}
        />

        {/* Product Details Main Grid */}
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '50px', marginBottom: '80px' }}>
          {/* Left: Image Gallery */}
          <div style={{ position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'relative',
                width: '100%',
                height: '540px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                background: '#141414',
                border: '1px solid var(--border-gold)',
                boxShadow: 'var(--shadow-card-hover)'
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <WishlistButton product={product} size={24} style={{ top: '20px', right: '20px' }} />
              {product.discount && (
                <span className="badge-discount" style={{ position: 'absolute', top: '20px', left: '20px' }}>
                  -{product.discount}% OFF
                </span>
              )}
            </motion.div>
          </div>

          {/* Right: Product Info & Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--gold-primary)', letterSpacing: '0.2em', fontWeight: 600 }}>
              {product.brand}
            </span>

            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', color: 'var(--text-white)', margin: '8px 0 12px 0' }}>
              {product.name}
            </h1>

            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <RatingStars rating={product.rating} reviewsCount={product.reviewsCount} size={18} />
              <span style={{ color: 'var(--text-dim)' }}>|</span>
              <span style={{ fontSize: '0.88rem', color: product.stock > 0 ? 'var(--gold-light)' : '#E53935', fontWeight: 600 }}>
                {product.stock > 0 ? `In Stock (${product.stock} bottles remaining)` : 'Out of Stock'}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '24px' }}>
              <span style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--gold-light)' }}>
                {formatPrice(product.price)}
              </span>
              {product.oldPrice && (
                <span style={{ fontSize: '1.2rem', color: 'var(--text-dim)', textDecoration: 'line-through' }}>
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '30px' }}>
              {product.description}
            </p>

            {/* Quantity Selector & Add to Cart */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
              <QuantitySelector
                quantity={quantity}
                onIncrease={() => setQuantity((q) => q + 1)}
                onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
              />
              <Button
                variant="gold"
                size="lg"
                onClick={handleAddToCart}
                icon={ShoppingBag}
                style={{ flex: 1 }}
              >
                Add To Bag
              </Button>
            </div>

            {/* Trust Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-dark)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Truck size={18} color="var(--gold-primary)" /> Express Worldwide Delivery
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <ShieldCheck size={18} color="var(--gold-primary)" /> 100% Authentic Guarantee
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <RefreshCw size={18} color="var(--gold-primary)" /> 30-Day Risk-Free Returns
              </div>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* FRAGRANCE NOTES PYRAMID & DETAILS TABS                              */}
        {/* =================================================================== */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', gap: '24px', borderBottom: '1px solid var(--border-dark)', marginBottom: '30px' }}>
            {[
              { id: 'notes', label: 'Fragrance Pyramid' },
              { id: 'description', label: 'Artisanal Description' },
              { id: 'reviews', label: `Reviews (${product.reviewsCount})` }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '14px 0',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  color: activeTab === tab.id ? 'var(--gold-light)' : 'var(--text-muted)',
                  borderBottom: activeTab === tab.id ? '2px solid var(--gold-primary)' : '2px solid transparent',
                  background: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Notes Tab */}
          {activeTab === 'notes' && (
            <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              <div className="glass-card-gold" style={{ padding: '28px', textAlign: 'center' }}>
                <div className="gold-badge" style={{ marginBottom: '14px' }}>Top Notes (Initial Impact)</div>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--text-white)', marginBottom: '10px' }}>
                  {product.topNotes?.join(', ')}
                </h4>
                <p style={{ fontSize: '0.88rem' }}>Bright, volatile essences that awaken the senses during the first 15 minutes of wear.</p>
              </div>

              <div className="glass-card-gold" style={{ padding: '28px', textAlign: 'center' }}>
                <div className="gold-badge" style={{ marginBottom: '14px' }}>Middle / Heart Notes</div>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--text-white)', marginBottom: '10px' }}>
                  {product.middleNotes?.join(', ')}
                </h4>
                <p style={{ fontSize: '0.88rem' }}>The radiant floral or spicy core that unfolds gracefully over 2 to 4 hours.</p>
              </div>

              <div className="glass-card-gold" style={{ padding: '28px', textAlign: 'center' }}>
                <div className="gold-badge" style={{ marginBottom: '14px' }}>Base Notes (Deep Trail)</div>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--text-white)', marginBottom: '10px' }}>
                  {product.baseNotes?.join(', ')}
                </h4>
                <p style={{ fontSize: '0.88rem' }}>Rich amber, woods, and musks providing incredible 12+ hour depth and sillage.</p>
              </div>
            </div>
          )}

          {/* Description Tab */}
          {activeTab === 'description' && (
            <div className="glass-card" style={{ padding: '36px', lineHeight: 1.8, fontSize: '1.05rem', color: 'var(--text-muted)' }}>
              <p style={{ marginBottom: '20px' }}>
                {product.description}
              </p>
              <p>
                Each bottle of {product.name} is formulated in small batches using traditional distillation techniques. Hand-blended in our private workshop, every ingredient undergoes rigorous quality control to ensure maximum concentration, purity, and unmatched projection.
              </p>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="glass-card" style={{ padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                <div style={{ textAlign: 'center', paddingRight: '30px', borderRight: '1px solid var(--border-dark)' }}>
                  <h2 style={{ fontSize: '3.5rem', color: 'var(--gold-light)', margin: 0 }}>{product.rating.toFixed(1)}</h2>
                  <RatingStars rating={product.rating} showScore={false} size={20} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>Based on {product.reviewsCount} reviews</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '8px' }}>Customer Feedback</h3>
                  <p style={{ color: 'var(--text-muted)' }}>99% of clients recommend this fragrance for longevity and sillage.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="section-header">
              <div className="section-subtitle">Complementary Essences</div>
              <h2 className="section-title">You May Also Desire</h2>
            </div>
            <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} onQuickView={setQuickViewProduct} />
              ))}
            </div>
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

export default ProductDetails;

