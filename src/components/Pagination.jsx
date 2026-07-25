import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '50px'
      }}
    >
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="nav-icon-btn"
        aria-label="Previous Page"
        style={{ opacity: currentPage === 1 ? 0.4 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
      >
        <ChevronLeft size={18} />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onPageChange(p)}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-full)',
            background: currentPage === p ? 'var(--gold-gradient)' : 'rgba(255, 255, 255, 0.04)',
            color: currentPage === p ? 'var(--bg-dark)' : 'var(--text-white)',
            border: currentPage === p ? 'none' : '1px solid var(--border-dark)',
            fontWeight: currentPage === p ? 700 : 500,
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="nav-icon-btn"
        aria-label="Next Page"
        style={{ opacity: currentPage === totalPages ? 0.4 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

export default Pagination;

