import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Modal({ isOpen, onClose, title, children, maxWidth = '800px' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="modal-content-box"
          style={{ maxWidth }}
          onClick={(e) => e.stopPropagation()}
        >
          <button type="button" onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={20} />
          </button>

          {title && (
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.8rem',
                color: 'var(--text-white)',
                marginBottom: '20px',
                paddingBottom: '12px',
                borderBottom: '1px solid var(--border-gold)'
              }}
            >
              {title}
            </h3>
          )}

          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Modal;

