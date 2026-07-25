import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Lock, Mail, User, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { useToast } from '../context/ToastContext';

export function Register() {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      addToast('Passwords do not match', 'error');
      return;
    }
    if (formData.fullName && formData.email) {
      addToast(`Account created! Welcome to Nafha, ${formData.fullName}!`, 'success');
      navigate('/');
    }
  };

  return (
    <div style={{ padding: '60px 0 100px 0', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '480px' }}>
        <div className="glass-card-gold" style={{ padding: '40px 32px', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold-primary)', marginBottom: '16px' }}>
            <Sparkles size={22} />
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600, fontSize: '0.85rem' }}>Join The Circle</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', color: 'var(--text-white)', marginBottom: '10px' }}>
            Create Account
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '30px' }}>
            Register for invitations to secret fragrance drops and 15% off your first bottle.
          </p>

          <form onSubmit={handleRegister} style={{ textAlign: 'left' }}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <div style={{ position: 'relative' }}>
                <User size={18} color="var(--text-dim)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="الاسم بالكامل"
                  className="form-input"
                  style={{ paddingLeft: '46px' }}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} color="var(--text-dim)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className="form-input"
                  style={{ paddingLeft: '46px' }}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} color="var(--text-dim)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="••••••••"
                  className="form-input"
                  style={{ paddingLeft: '46px' }}
                />
              </div>
            </div>

            <Button type="submit" variant="gold" size="lg" icon={ArrowRight} style={{ width: '100%', marginTop: '10px' }}>
              Create VIP Account
            </Button>
          </form>

          <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-dark)', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: 'var(--gold-light)', fontWeight: 600 }}>
              Sign In Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

