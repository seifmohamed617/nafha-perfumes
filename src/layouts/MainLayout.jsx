import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackgroundEffects } from '../components/BackgroundEffects';
import { Toast } from '../components/Toast';
import { BackToTop } from '../components/BackToTop';
import { Modal } from '../components/Modal';
import { SearchBar } from '../components/SearchBar';

export function MainLayout() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const location = useLocation();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Background Animated HTML Particles */}
      <BackgroundEffects />

      {/* Navigation Bar */}
      <Navbar onOpenSearch={() => setSearchModalOpen(true)} />

      {/* Main Page Container with Smooth Page Transitions */}
      <main style={{ flex: 1, paddingTop: 'var(--header-height)', position: 'relative', zIndex: 1 }}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Search Popup Modal */}
      <Modal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        title="Search Luxury Fragrances"
        maxWidth="650px"
      >
        <div style={{ paddingTop: '10px' }}>
          <SearchBar autoFocus />
          <p style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--text-dim)', textAlign: 'center' }}>
            Try searching for "Royal Oud", "Vanilla", "French", "Rose", or "Saffron"
          </p>
        </div>
      </Modal>

      {/* Global Toast Notifications */}
      <Toast />

      {/* Floating Scroll to Top */}
      <BackToTop />
    </div>
  );
}

export default MainLayout;

