import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Camera, Globe, MessageCircle, Video, Send } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export function Footer() {
  const { addToast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const emailInput = e.target.elements.email;
    if (emailInput && emailInput.value) {
      addToast('Thank you for joining the VIP Fragrance Circle!', 'success');
      emailInput.value = '';
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <Link to="/" className="logo-brand">
              <Sparkles size={24} color="var(--gold-primary)" />
              NAFHA<span>.</span>
            </Link>
            <p>
              Embodying timeless luxury, pure craftsmanship, and rare olfactory artistry. Handcrafted for those who command distinction.
            </p>
            <div className="social-links">
              <a href="#instagram" className="social-icon" aria-label="Instagram">
                <Camera size={18} />
              </a>
              <a href="#facebook" className="social-icon" aria-label="Facebook">
                <Globe size={18} />
              </a>
              <a href="#twitter" className="social-icon" aria-label="Twitter">
                <MessageCircle size={18} />
              </a>
              <a href="#youtube" className="social-icon" aria-label="Youtube">
                <Video size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">روابط سريعة</h4>
            <ul className="footer-links">
              <li><Link to="/products">جميع العطور</Link></li>
              <li><Link to="/categories">المجموعات</Link></li>
              <li><Link to="/about">قصتنا</Link></li>
              <li><Link to="/contact">تواصل معنا</Link></li>
              <li><Link to="/wishlist">المفضلة</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="footer-heading">العطور</h4>
            <ul className="footer-links">
              <li><Link to="/products?category=Arabic">العود العربي</Link></li>
              <li><Link to="/products?category=French">الأناقة الفرنسية</Link></li>
              <li><Link to="/products?category=Men">إكسيرات الرجال</Link></li>
              <li><Link to="/products?category=Women">أعطر النساء</Link></li>
              <li><Link to="/products?category=Luxury Collection">المجموعة الفاخرة</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="footer-heading">انضم إلى الدائرة</h4>
            <p style={{ fontSize: '0.88rem', marginBottom: '16px' }}>
              اشترك لتصلك دعوات حصرية وخصومات خاصة وأول وصول للإصدارات المحدودة.
            </p>
            <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                name="email"
                placeholder="أدخل بريدك الإلكتروني"
                required
                className="form-input"
                style={{ fontSize: '0.85rem', padding: '10px 14px' }}
              />
              <button
                type="submit"
                className="btn btn-gold"
                style={{ padding: '10px 16px', borderRadius: 'var(--radius-md)' }}
                aria-label="Subscribe to newsletter"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Nafha Perfumes. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#privacy" style={{ color: 'var(--text-dim)' }}>سياسة الخصوصية</a>
            <a href="#terms" style={{ color: 'var(--text-dim)' }}>الشروط والأحكام</a>
            <a href="#shipping" style={{ color: 'var(--text-dim)' }}>معلومات الشحن</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

