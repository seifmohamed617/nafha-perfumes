import React from 'react';

export function LoadingSpinner({ text = 'Loading luxury experience...' }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
        gap: '20px'
      }}
    >
      <div
        style={{
          width: '50px',
          height: '50px',
          border: '3px solid rgba(212, 175, 55, 0.2)',
          borderTop: '3px solid var(--gold-primary)',
          borderRadius: '50%',
          animation: 'rotateSlow 1s linear infinite'
        }}
      />
      <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        {text}
      </span>
    </div>
  );
}

export function ProductSkeletonGrid({ count = 8 }) {
  return (
    <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="glass-card"
          style={{
            height: '380px',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <div
            style={{
              width: '100%',
              height: '60%',
              background: 'rgba(255, 255, 255, 0.04)',
              animation: 'shimmer 2s infinite linear'
            }}
          />
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ width: '40%', height: '12px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '4px' }} />
            <div style={{ width: '80%', height: '18px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px' }} />
            <div style={{ width: '60%', height: '14px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '4px' }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default LoadingSpinner;

