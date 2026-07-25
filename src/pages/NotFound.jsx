import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', textAlign: 'center' }}>
      <div className="glass-card-gold" style={{ padding: '60px 40px', maxWidth: '560px', borderRadius: 'var(--radius-xl)' }}>
        <div style={{ color: 'var(--gold-primary)', display: 'inline-flex', marginBottom: '20px', animation: 'float 6s ease-in-out infinite' }}>
          <Compass size={64} />
        </div>

        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '5rem', color: 'var(--gold-light)', lineHeight: 1, marginBottom: '10px' }}>
          404
        </h1>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', color: 'var(--text-white)', marginBottom: '16px' }}>
          Uncharted Fragrance Path
        </h2>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', marginBottom: '32px', lineHeight: 1.6 }}>
          The page or essence you are searching for does not exist or has been moved to our private vault.
        </p>

        <Button variant="gold" size="lg" onClick={() => navigate('/')} icon={ArrowLeft}>
          Return to Sanctuary Home
        </Button>
      </div>
    </div>
  );
}

export default NotFound;

