
import { Sparkles, Award, Globe, Leaf } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { Newsletter } from '../components/Newsletter';

export function About() {
  return (
    <div style={{ padding: '40px 0 90px 0' }}>
      <div className="container">
        <Breadcrumb items={[{ label: 'Our Story' }]} />

        {/* Hero Banner */}
        <div className="section-header" style={{ marginBottom: '60px' }}>
          <div className="gold-badge" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} /> Our Story
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.2rem' }}>
            About <span className="gold-gradient-text">Nafha Perfumes</span>
          </h1>
          <p className="section-description" style={{ fontSize: '1.15rem', maxWidth: '720px', margin: '0 auto' }}>
            At Nafha, we create luxury perfumes using authentic natural ingredients like aged Cambodian Oud, hand-picked roses, and pure sandalwood. We focus on quality and long-lasting scents.
          </p>
        </div>

        {/* Story Grid Section */}
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center', marginBottom: '90px' }}>
          <div
            style={{
              position: 'relative',
              height: '480px',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: '1px solid var(--border-gold)',
              boxShadow: 'var(--shadow-card-hover)'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80"
              alt="Artisanal Oud and Perfume Distillation"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', color: 'var(--text-white)', marginBottom: '20px' }}>
              Made with Care
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px' }}>
              We source our ingredients directly from where they grow best: roses from Grasse, saffron from Kashmir, and authentic agarwood from Southeast Asia. Every fragrance is blended by experienced perfumers to ensure a balanced, high-quality scent.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              We believe in taking our time. Each batch is aged carefully so the scent develops its full depth and lasts longer when you wear it.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '90px' }}>
          <div className="glass-card-gold" style={{ padding: '36px', textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.15)', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
              <Award size={28} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Quality First</h3>
            <p style={{ fontSize: '0.95rem' }}>We blend our perfumes in small batches to maintain high quality and give proper attention to every bottle we produce.</p>
          </div>

          <div className="glass-card-gold" style={{ padding: '36px', textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.15)', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
              <Globe size={28} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Real Ingredients</h3>
            <p style={{ fontSize: '0.95rem' }}>We source natural, authentic ingredients from trusted growers around the world — nothing artificial, nothing diluted.</p>
          </div>

          <div className="glass-card-gold" style={{ padding: '36px', textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.15)', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
              <Leaf size={28} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Responsibly Sourced</h3>
            <p style={{ fontSize: '0.95rem' }}>Our botanicals are sustainably harvested and our bottles are made from recyclable materials.</p>
          </div>
        </div>

        <Newsletter />
      </div>
    </div>
  );
}

export default About;

