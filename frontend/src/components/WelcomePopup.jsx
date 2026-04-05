import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Sparkles, ArrowRight } from 'lucide-react';

const WelcomePopup = () => {
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const seen = sessionStorage.getItem('ozlume_popup_seen');
    if (!seen) {
      const timer = setTimeout(() => setShow(true), 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    setClosing(true);
    sessionStorage.setItem('ozlume_popup_seen', '1');
    setTimeout(() => { setShow(false); setClosing(false); }, 350);
  };

  const goToContact = () => {
    close();
    setTimeout(() => { navigate('/contact'); window.scrollTo(0, 0); }, 400);
  };

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        data-testid="popup-backdrop"
        style={{
          position: 'fixed', inset: 0, zIndex: 11000,
          background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)',
          opacity: closing ? 0 : 1,
          transition: 'opacity 0.35s ease'
        }}
      />

      {/* Popup */}
      <div
        data-testid="welcome-popup"
        style={{
          position: 'fixed', top: '50%', left: '50%',
          zIndex: 11001, width: '90%', maxWidth: '460px',
          transform: closing
            ? 'translate(-50%, -50%) scale(0.9)'
            : 'translate(-50%, -50%) scale(1)',
          opacity: closing ? 0 : 1,
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid rgba(0, 163, 168, 0.3)',
          boxShadow: '0 32px 80px rgba(0, 163, 168, 0.2), 0 0 0 1px rgba(0,163,168,0.1)'
        }}
      >
        {/* Top accent bar */}
        <div style={{
          height: '4px',
          background: 'linear-gradient(90deg, #00A3A8, #00d4db, #00A3A8)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s linear infinite'
        }} />

        <div style={{
          background: 'linear-gradient(180deg, #111413 0%, #0a0b0a 100%)',
          padding: '40px 36px 36px',
          textAlign: 'center',
          position: 'relative'
        }}>
          {/* Close button */}
          <button
            onClick={close}
            data-testid="popup-close-btn"
            style={{
              position: 'absolute', top: '16px', right: '16px',
              background: 'rgba(255,255,255,0.06)', border: 'none',
              borderRadius: '50%', width: '32px', height: '32px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'var(--text-muted)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            <X size={16} />
          </button>

          {/* Icon */}
          <div style={{
            width: '56px', height: '56px', borderRadius: '16px',
            background: 'rgba(0, 163, 168, 0.12)',
            border: '1px solid rgba(0, 163, 168, 0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px',
            animation: 'pulse-glow 2s ease-in-out infinite'
          }}>
            <Sparkles size={26} color="#00A3A8" />
          </div>

          {/* Content */}
          <h2 style={{
            fontSize: '1.5rem', fontWeight: '700',
            color: '#FFFFFF', marginBottom: '8px', lineHeight: '1.3'
          }}>
            Got a Project in Mind?
          </h2>

          <p style={{
            color: 'var(--text-secondary)', fontSize: '0.95rem',
            lineHeight: '1.6', marginBottom: '28px', maxWidth: '340px',
            margin: '0 auto 28px'
          }}>
            Tell us about your idea and get a <span style={{ color: '#00A3A8', fontWeight: '600' }}>free custom quote</span> within 24 hours. No obligation, no pressure.
          </p>

          {/* CTA */}
          <button
            onClick={goToContact}
            data-testid="popup-cta-btn"
            className="btn-primary"
            style={{
              width: '100%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', gap: '8px',
              fontSize: '1rem', padding: '14px 24px',
              marginBottom: '16px'
            }}
          >
            Get Your Free Quote <ArrowRight size={18} />
          </button>

          <button
            onClick={close}
            data-testid="popup-dismiss-btn"
            style={{
              background: 'none', border: 'none',
              color: 'var(--text-muted)', fontSize: '0.85rem',
              cursor: 'pointer', padding: '8px',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            Maybe later
          </button>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0, 163, 168, 0); }
          50% { box-shadow: 0 0 20px 4px rgba(0, 163, 168, 0.15); }
        }
      `}</style>
    </>
  );
};

export default WelcomePopup;
