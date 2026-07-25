import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { Button } from './Button';

export function EmptyState({
  title = "No Fragrances Found",
  description = "We couldn't find any items matching your criteria. Try resetting your search filters or explore our luxury collections.",
  icon: Icon = Sparkles,
  actionText = "Explore All Fragrances",
  actionLink = "/products",
  onActionClick
}) {
  const navigate = useNavigate();

  const handleAction = () => {
    if (onActionClick) {
      onActionClick();
    } else if (actionLink) {
      navigate(actionLink);
    }
  };

  return (
    <div
      className="glass-card"
      style={{
        padding: '60px 30px',
        textAlign: 'center',
        maxWidth: '540px',
        margin: '40px auto',
        borderRadius: 'var(--radius-lg)'
      }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'rgba(212, 175, 55, 0.1)',
          border: '1px solid var(--border-gold)',
          color: 'var(--gold-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px auto'
        }}
      >
        <Icon size={30} />
      </div>

      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--text-white)', marginBottom: '12px' }}>
        {title}
      </h3>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginBottom: '28px', lineHeight: 1.6 }}>
        {description}
      </p>

      {actionText && (
        <Button variant="gold" onClick={handleAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
}

export default EmptyState;

