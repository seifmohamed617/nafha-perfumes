import React from 'react';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export function Toast() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast-item">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {toast.type === 'success' && <CheckCircle2 size={20} color="var(--gold-light)" />}
            {toast.type === 'info' && <Info size={20} color="var(--gold-primary)" />}
            {toast.type === 'error' && <AlertCircle size={20} color="#E53935" />}
            <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{toast.message}</span>
          </div>
          <button
            type="button"
            onClick={() => removeToast(toast.id)}
            aria-label="Close notification"
            style={{ color: 'var(--text-dim)', padding: '2px' }}
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Toast;

