import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Truck, Award, Clock, ChevronDown, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import { CategoryCard } from '../components/CategoryCard';
import { QuickViewModal } from '../components/QuickViewModal';
import { Newsletter } from '../components/Newsletter';
import { Button } from '../components/Button';
import { RatingStars } from '../components/RatingStars';
import { perfumes, categoriesList } from '../data/perfumes';
import { customerReviews } from '../data/reviews';
import { faqsList } from '../data/faqs';

export function Home() {
  const navigate = useNavigate();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('featured'); // featured | bestSellers | newArrivals | limited

  // Filtered lists for tabs
  const featuredProducts = perfumes.filter((p) => p.featured).slice(0, 8);
  const bestSellers = perfumes.filter((p) => p.isBestSeller).slice(0, 8);
  const newArrivals = perfumes.filter((p) => p.isNew).slice(0, 8);
  const limitedEdition = perfumes.filter((p) => p.category === 'Luxury Collection').slice(0, 8);

  const getDisplayedProducts = () => {
    switch (activeTab) {
      case 'bestSellers':
        return bestSellers;
      case 'newArrivals':
        return newArrivals;
      case 'limited':
        return limitedEdition;
      case 'featured':
      default:
        return featuredProducts;
    }
  };

  const instagramImages = [
    'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=400&q=80'
  ];

  return (
    <div>
      {/* =================================================================== */}
      {/* 1. HERO SECTION WITH PARALLAX EFFECT                                */}
      {/* =================================================================== */}
      <section
        style={{
          position: 'relative',
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          padding: '60px 0'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="gold-badge" style={{ marginBottom: '20px' }}>
                <Sparkles size={14} /> Haute Parfumerie
              </div>

              <h1 style={{ marginBottom: '24px', textTransform: 'capitalize' }}>
                Discover <span className="gold-gradient-text">Luxury Fragrance</span> & Timeless Elegance
              </h1>

              <p className="section-description" style={{ marginBottom: '36px', fontSize: '1.15rem' }}>
                Immerse your senses in rare artisanal essences, hand-harvested Grasse roses, and 30-year aged Cambodian Oud. Crafted for those who command distinction.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Button
                  variant="gold"
                  size="lg"
                  onClick={() => navigate('/products')}
                  icon={ArrowRight}
                >
                  Shop The Collection
                </Button>
                <Button
                  variant="outline-gold"
                  size="lg"
                  onClick={() => navigate('/categories')}
                >
                  Explore Categories
                </Button>
              </div>

              {/* Stats Bar */}
              <div style={{ display: 'flex', gap: '30px', marginTop: '50px', paddingTop: '30px', borderTop: '1px solid var(--border-dark)' }}>
                <div>
                  <h4 style={{ fontSize: '1.8rem', color: 'var(--gold-light)', margin: 0 }}>24+</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Exclusive Scents</span>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.8rem', color: 'var(--gold-light)', margin: 0 }}>100%</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Natural Essences</span>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.8rem', color: 'var(--gold-light)', margin: 0 }}>14h+</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Longevity</span>
                </div>
              </div>
            </motion.div>

            {/* Right Luxury Hero Image Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              style={{ position: 'relative' }}
            >
              <div
                className="animate-float"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '520px',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-gold)',
                  boxShadow: 'var(--shadow-card-hover)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80"
                  alt="Royal Oud Imperial Luxury Perfume"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(9, 9, 9, 0.9) 0%, transparent 60%)'
                  }}
                />
                <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px' }}>
                  <span className="gold-badge" style={{ marginBottom: '8px' }}>Featured Masterpiece</span>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--text-white)' }}>Royal Oud Imperial</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Cambodian Oud • Damask Rose • Saffron</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 2. WHY CHOOSE NAFHA (VALUE PROPOSITIONS)                           */}
      {/* =================================================================== */}
      <section style={{ padding: '60px 0', background: 'var(--bg-secondary)', borderY: '1px solid var(--border-dark)' }}>
        <div className="container">
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
            <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                <Award size={24} />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Master Craftsmanship</h4>
              <p style={{ fontSize: '0.88rem' }}>Formulated by world-renowned perfumers in Grasse and Dubai.</p>
            </div>

            <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                <Truck size={24} />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Express Worldwide Delivery</h4>
              <p style={{ fontSize: '0.88rem' }}>Complimentary insured shipping on all luxury orders over $150.</p>
            </div>

            <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                <Shield size={24} />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>100% Authenticity Guarantee</h4>
              <p style={{ fontSize: '0.88rem' }}>Direct from our atelier with individual batch certificate of origin.</p>
            </div>

            <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                <Clock size={24} />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Complimentary Discovery Vials</h4>
              <p style={{ fontSize: '0.88rem' }}>Two 2ml sample vials included with every full bottle purchase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 3. FEATURED PRODUCTS & TABS                                        */}
      {/* =================================================================== */}
      <section style={{ padding: '90px 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Olfactory Excellence</div>
            <h2 className="section-title">The Nafha Collection</h2>
            <div className="gold-divider" />
          </div>

          {/* Navigation Tabs */}
          <div
            style={{
              display: 'flex',
              justify: 'center',
              gap: '12px',
              marginBottom: '40px',
              flexWrap: 'wrap'
            }}
          >
            {[
              { id: 'featured', label: 'Featured Scents' },
              { id: 'bestSellers', label: 'Best Sellers' },
              { id: 'newArrivals', label: 'New Arrivals' },
              { id: 'limited', label: 'Limited Editions' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '10px 24px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  background: activeTab === tab.id ? 'var(--gold-gradient)' : 'rgba(255, 255, 255, 0.04)',
                  color: activeTab === tab.id ? 'var(--bg-dark)' : 'var(--text-white)',
                  border: activeTab === tab.id ? 'none' : '1px solid var(--border-dark)',
                  transition: 'all 0.3s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {getDisplayedProducts().map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Button
              variant="outline-gold"
              size="lg"
              onClick={() => navigate('/products')}
            >
              Explore All 24 Fragrances
            </Button>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. CATEGORIES SHOWCASE                                             */}
      {/* =================================================================== */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Curated Worlds</div>
            <h2 className="section-title">Explore Fragrance Families</h2>
            <p className="section-description">Select your personal fragrance signature from our distinguished categories.</p>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {categoriesList.slice(1, 7).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 5. CUSTOMER REVIEWS & TESTIMONIALS                                 */}
      {/* =================================================================== */}
      <section style={{ padding: '90px 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Client Accolades</div>
            <h2 className="section-title">Voices of Distinction</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
            {customerReviews.map((review) => (
              <div key={review.id} className="glass-card-gold" style={{ padding: '32px', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <img
                    src={review.avatar}
                    alt={review.name}
                    style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--gold-primary)' }}
                  />
                  <div>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--text-white)' }}>{review.name}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--gold-light)' }}>{review.role}</span>
                  </div>
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <RatingStars rating={review.rating} showScore={false} size={18} />
                </div>

                <p style={{ fontStyle: 'italic', fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
                  "{review.comment}"
                </p>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Purchased: <strong style={{ color: 'var(--text-white)' }}>{review.perfumeName}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 6. FAQ ACCORDION                                                   */}
      {/* =================================================================== */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="section-header">
            <div className="section-subtitle">Frequently Asked Questions</div>
            <h2 className="section-title">Everything You Need To Know</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqsList.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="glass-card"
                  style={{
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: isOpen ? '1px solid var(--border-gold)' : '1px solid var(--border-dark)'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      background: 'none',
                      color: 'var(--text-white)',
                      fontSize: '1.1rem',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600
                    }}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={20}
                      color="var(--gold-primary)"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 24px 24px', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 7. INSTAGRAM GALLERY GRID                                          */}
      {/* =================================================================== */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">@NafhaPerfumes</div>
            <h2 className="section-title">Follow Our Olfactory Journey</h2>
          </div>

          <div className="grid-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
            {instagramImages.map((imgUrl, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  paddingTop: '100%',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={imgUrl}
                  alt={`Instagram ${i}`}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(212, 175, 55, 0.4)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#090909'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                >
                  <Camera size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 8. NEWSLETTER SECTION                                              */}
      {/* =================================================================== */}
      <Newsletter />

      {/* Quick View Popup Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}

export default Home;

