import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Lock, Mail, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { useToast } from '../context/ToastContext';

export function Login() {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      addToast(`Welcome back, ${email.split('@')[0]}!`, 'success');
      navigate('/');
    }
  };

  return (
    <div style={{ padding: '60px 0 100px 0', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '480px' }}>
        <div className="glass-card-gold" style={{ padding: '40px 32px', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold-primary)', marginBottom: '16px' }}>
            <Sparkles size={22} />
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600, fontSize: '0.85rem' }}>VIP Client Access</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', color: 'var(--text-white)', marginBottom: '10px' }}>
            Welcome Back
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '30px' }}>
            Sign in to access your personal fragrance vault and exclusive privileges.
          </p>

          <form onSubmit={handleLogin} style={{ textAlign: 'left' }}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} color="var(--text-dim)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ahmed@example.com"
                  className="form-input"
                  style={{ paddingLeft: '46px' }}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} color="var(--text-dim)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="form-input"
                  style={{ paddingLeft: '46px' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
              <a href="#forgot" style={{ fontSize: '0.82rem', color: 'var(--gold-light)' }}>
                Forgot Password?
              </a>
            </div>

            <Button type="submit" variant="gold" size="lg" icon={ArrowRight} style={{ width: '100%' }}>
              Sign In
            </Button>
          </form>

          <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-dark)', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            New to Nafha?{' '}
            <Link to="/register" style={{ color: 'var(--gold-light)', fontWeight: 600 }}>
              Create a VIP Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

