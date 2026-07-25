import React from 'react';
import { RotateCcw, Filter, Star, Check } from 'lucide-react';
import { useProducts } from '../context/ProductsContext';
import { PriceSlider } from './PriceSlider';
import { categoriesList } from '../data/perfumes';

export function FilterSidebar() {
  const {
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    minRating,
    setMinRating,
    inStockOnly,
    setInStockOnly,
    sortBy,
    setSortBy,
    resetFilters
  } = useProducts();

  return (
    <aside className="glass-card" style={{ padding: '24px', height: 'fit-content' }}>
      {/* Sidebar Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
          paddingBottom: '16px',
          borderBottom: '1px solid var(--border-dark)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-light)' }}>
          <Filter size={18} />
          <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', margin: 0 }}>Filter & Sort</h3>
        </div>
        <button
          type="button"
          onClick={resetFilters}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em'
          }}
        >
          <RotateCcw size={12} /> Reset
        </button>
      </div>

      {/* Sort By Option */}
      <div className="form-group">
        <label className="form-label">Sort By</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="form-input"
          style={{ background: 'var(--bg-dark)', cursor: 'pointer' }}
        >
          <option value="newest">Newest Arrivals</option>
          <option value="highestRated">Highest Rated</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>
      </div>

      {/* Categories Filter */}
      <div className="form-group" style={{ marginTop: '20px' }}>
        <label className="form-label">Category</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {categoriesList.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.88rem',
                  background: isSelected ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                  border: isSelected ? '1px solid var(--border-gold)' : '1px solid transparent',
                  color: isSelected ? 'var(--gold-light)' : 'var(--text-muted)',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>{cat.name}</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>({cat.count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Slider */}
      <div className="form-group" style={{ marginTop: '20px' }}>
        <PriceSlider value={priceRange} onChange={setPriceRange} min={0} max={500} />
      </div>

      {/* Rating Filter */}
      <div className="form-group" style={{ marginTop: '20px' }}>
        <label className="form-label">Minimum Rating</label>
        <div style={{ display: 'flex', gap: '8px' }}>
          {[0, 4.5, 4.8, 5.0].map((rate) => (
            <button
              key={rate}
              type="button"
              onClick={() => setMinRating(rate)}
              style={{
                flex: 1,
                padding: '6px 0',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.8rem',
                border: minRating === rate ? '1px solid var(--border-gold)' : '1px solid var(--border-dark)',
                background: minRating === rate ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                color: minRating === rate ? 'var(--gold-light)' : 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2px'
              }}
            >
              {rate === 0 ? 'All' : `${rate}★`}
            </button>
          ))}
        </div>
      </div>

      {/* Availability Toggle */}
      <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-dark)' }}>
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            fontSize: '0.88rem',
            color: 'var(--text-muted)'
          }}
        >
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            style={{ accentColor: 'var(--gold-primary)', width: '16px', height: '16px' }}
          />
          In Stock Only
        </label>
      </div>
    </aside>
  );
}

export default FilterSidebar;

