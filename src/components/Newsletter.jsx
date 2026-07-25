import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { Button } from './Button';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const { addToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      addToast('Welcome to the Nafha Private Circle. Your 15% VIP discount code is VIPNAFHA15', 'success');
      setEmail('');
    }
  };

  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        <div
          className="glass-card-gold"
          style={{
            padding: '60px 40px',
            textAlign: 'center',
            borderRadius: 'var(--radius-xl)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div className="section-subtitle">
            <Sparkles size={14} style={{ display: 'inline', marginRight: '6px' }} />
            Exclusive Privileges
          </div>
          <h2 className="section-title">Join the Nafha Private Circle</h2>
          <p className="section-description" style={{ maxWidth: '560px', margin: '0 auto 30px auto' }}>
            Receive private invitations to new fragrance launches, masterclasses, and an exclusive 15% gift on your inaugural order.
          </p>

          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              gap: '12px',
              maxWidth: '520px',
              margin: '0 auto',
              flexWrap: 'wrap'
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="أدخل بريدك الإلكتروني..."
              required
              className="form-input"
              style={{
                flex: 1,
                height: '52px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(9, 9, 9, 0.8)',
                paddingLeft: '24px'
              }}
            />
            <Button type="submit" variant="gold" icon={Send} style={{ height: '52px' }}>
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;

