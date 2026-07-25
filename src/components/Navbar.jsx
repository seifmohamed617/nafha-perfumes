import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, Search, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useProducts } from '../context/ProductsContext';

export function Navbar({ onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { totalCount: cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="nav-icon-btn mobile-toggle-btn"
          aria-label="Toggle mobile menu"
          style={{ display: 'none' }}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Brand Logo */}
        <Link to="/" className="logo-brand" onClick={closeMobileMenu}>
          <Sparkles size={24} color="var(--gold-primary)" />
          NAFHA<span>.</span>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                المنتجات
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                الفئات
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                عنّا
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                تواصل معنا
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Actions (Search, Wishlist, Cart) */}
        <div className="nav-actions">
          <button
            type="button"
            onClick={onOpenSearch}
            className="nav-icon-btn"
            aria-label="Search perfumes"
          >
            <Search size={20} />
          </button>

          <Link to="/wishlist" className="nav-icon-btn" aria-label="View Wishlist">
            <Heart size={20} />
            {wishlistCount > 0 && <span className="badge-count">{wishlistCount}</span>}
          </Link>

          <Link to="/cart" className="nav-icon-btn" aria-label="View Cart">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="badge-count">{cartCount}</span>}
          </Link>
        </div>
      </div>

      {/* Responsive Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: 'var(--header-height)',
            background: 'rgba(9, 9, 9, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            padding: '30px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            borderTop: '1px solid var(--border-gold)'
          }}
        >
          <NavLink
            to="/"
            onClick={closeMobileMenu}
            style={{ fontSize: '1.3rem', color: 'var(--text-white)', fontWeight: 600 }}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            onClick={closeMobileMenu}
            style={{ fontSize: '1.3rem', color: 'var(--text-white)', fontWeight: 600 }}
          >
            Products
          </NavLink>
          <NavLink
            to="/categories"
            onClick={closeMobileMenu}
            style={{ fontSize: '1.3rem', color: 'var(--text-white)', fontWeight: 600 }}
          >
            Categories
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMobileMenu}
            style={{ fontSize: '1.3rem', color: 'var(--text-white)', fontWeight: 600 }}
          >
            عنّا
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMobileMenu}
            style={{ fontSize: '1.3rem', color: 'var(--text-white)', fontWeight: 600 }}
          >
            Contact
          </NavLink>
          <div style={{ height: '1px', background: 'var(--border-dark)', margin: '10px 0' }} />
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link
              to="/login"
              onClick={closeMobileMenu}
              className="btn btn-outline-gold"
              style={{ flex: 1, textAlign: 'center' }}
            >
              تسجيل الدخول
            </Link>
            <Link
              to="/cart"
              onClick={closeMobileMenu}
              className="btn btn-gold"
              style={{ flex: 1, textAlign: 'center' }}
            >
              السلة ({cartCount})
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

