import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function Breadcrumb({ items = [] }) {
  return (
    <nav
      aria-label="Breadcrumb navigation"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        marginBottom: '24px'
      }}
    >
      <Link to="/" style={{ color: 'var(--text-muted)' }}>
        Home
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={14} color="var(--text-dim)" />
          {item.link ? (
            <Link to={item.link} style={{ color: 'var(--text-muted)' }}>
              {item.label}
            </Link>
          ) : (
            <span style={{ color: 'var(--gold-light)', fontWeight: 500 }}>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

export default Breadcrumb;

