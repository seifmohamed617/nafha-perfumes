import React from 'react';
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
            <Sparkles size={14} /> Haute Parfumerie Heritage
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.2rem' }}>
            The Story of <span className="gold-gradient-text">Nafha Perfumes</span>
          </h1>
          <p className="section-description" style={{ fontSize: '1.15rem', maxWidth: '720px', margin: '0 auto' }}>
            Founded on the obsession for rare natural botanicals, aged Cambodian Oud, and French artisanal blending, Nafha creates olfactory signatures for the discerning few.
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
              Crafted Without Compromise
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px' }}>
              At Nafha, every creation begins with a search across the globe for rare raw materials: hand-harvested May roses from Grasse, wild Kashmiri saffron, pure Mysore sandalwood, and aged Cambodian Agarwood (Oud).
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Our master perfumers in Grasse and Dubai dedicate months to macerating and aging each formula to perfection, ensuring unmatched sillage, depth, and longevity.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '90px' }}>
          <div className="glass-card-gold" style={{ padding: '36px', textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.15)', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
              <Award size={28} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Artisanal Perfection</h3>
            <p style={{ fontSize: '0.95rem' }}>Small batch hand-blending guarantees every bottle meets the exacting standards of French high perfumery.</p>
          </div>

          <div className="glass-card-gold" style={{ padding: '36px', textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.15)', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
              <Globe size={28} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Rare Global Sourcing</h3>
            <p style={{ fontSize: '0.95rem' }}>Ethically sourced ingredients from historic flower fields in Provence to sustainable agarwood plantations in South East Asia.</p>
          </div>

          <div className="glass-card-gold" style={{ padding: '36px', textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.15)', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
              <Leaf size={28} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Clean & Sustainable</h3>
            <p style={{ fontSize: '0.95rem' }}>100% cruelty-free, sustainably harvested botanicals, housed in recyclable crystal glass vessels.</p>
          </div>
        </div>

        <Newsletter />
      </div>
    </div>
  );
}

export default About;

