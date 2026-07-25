import React from 'react';
import { Search, X } from 'lucide-react';
import { useProducts } from '../context/ProductsContext';

export function SearchBar({ autoFocus = false, placeholder = "Search by fragrance name, brand, notes, or category..." }) {
  const { searchQuery, setSearchQuery } = useProducts();

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Search
        size={20}
        color="var(--gold-primary)"
        style={{
          position: 'absolute',
          left: '18px',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none'
        }}
      />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        autoFocus={autoFocus}
        placeholder={placeholder}
        className="form-input"
        style={{
          paddingLeft: '50px',
          paddingRight: searchQuery ? '45px' : '18px',
          fontSize: '1rem',
          height: '52px',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(26, 26, 26, 0.9)',
          border: '1px solid var(--border-gold)'
        }}
      />
      {searchQuery && (
        <button
          type="button"
          onClick={() => setSearchQuery('')}
          aria-label="Clear search query"
          style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)',
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;

