import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Camera, Globe, MessageCircle } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import { useToast } from '../context/ToastContext';

export function Contact() {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      addToast('شكراً على تواصلك! سنرد عليك في أقرب وقت ممكن.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div style={{ padding: '40px 0 90px 0' }}>
      <div className="container">
        <Breadcrumb items={[{ label: 'Contact Us' }]} />

        <div className="section-header">
          <div className="section-subtitle">تواصل معنا</div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem' }}>
            نحن هنا لمساعدتك
          </h1>
          <p className="section-description">
            سواء كان عندك سؤال عن عطر، طلب خاص، أو مشكلة في الشحن — فريقنا جاهز يساعدك.
          </p>
        </div>

        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', marginBottom: '80px' }}>
          {/* Left Store Details */}
          <div className="glass-card-gold" style={{ padding: '36px', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--text-white)', marginBottom: '24px' }}>
              فروعنا
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <MapPin size={22} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)' }}>فرع باريس</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>28 شارع فوبورج سانت هونوريه، باريس، فرنسا</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <MapPin size={22} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)' }}>فرع دبي</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>دبي مول، دبي، الإمارات العربية المتحدة</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <Mail size={22} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)' }}>البريد الإلكتروني</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>hello@nafha-perfumes.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <Phone size={22} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-white)' }}>رقم التواصل</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>+20 100 000 0000 (الأحد – الجمعة، 9 صباحاً – 8 مساءً)</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--border-dark)' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--gold-light)', marginBottom: '16px' }}>تابعونا</h4>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#instagram" className="social-icon" aria-label="Instagram"><Camera size={18} /></a>
                <a href="#facebook" className="social-icon" aria-label="Facebook"><Globe size={18} /></a>
                <a href="#twitter" className="social-icon" aria-label="Twitter"><MessageCircle size={18} /></a>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '36px', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--text-white)', marginBottom: '24px' }}>
              أرسل لنا رسالة
            </h3>

            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">اسمك *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="الاسم بالكامل"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">البريد الإلكتروني *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ahmed@example.com"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">الموضوع</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="طلب خاص / استشارة عن العطور"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">الرسالة *</label>
              <textarea
                rows="5"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="اكتب رسالتك هنا..."
                className="form-input"
                style={{ resize: 'vertical' }}
              />
            </div>

            <Button type="submit" variant="gold" size="lg" icon={Send} style={{ width: '100%' }}>
              إرسال الرسالة
            </Button>
          </form>
        </div>

        {/* Map Visual Placeholder */}
        <div
          className="glass-card"
          style={{
            height: '350px',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
            alt="World map luxury store locator"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}
          />
          <div style={{ position: 'absolute', textAlign: 'center', padding: '20px' }}>
            <MapPin size={40} color="var(--gold-primary)" style={{ animation: 'bounceSoft 2s infinite' }} />
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--text-white)' }}>
              فروعنا
            </h3>
            <p style={{ color: 'var(--gold-light)' }}>باريس • دبي</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

