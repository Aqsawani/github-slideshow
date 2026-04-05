import React from 'react';
import { ArrowRight } from 'lucide-react';

const TopBanner = () => {
  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <div data-testid="top-banner" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      overflow: 'hidden',
      padding: '12px 40px',
      background: 'linear-gradient(135deg, #0a1a1a 0%, #0d2b2c 50%, #0a1a1a 100%)',
      backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,20,20,0.8) 50%, rgba(0,0,0,0.85) 100%), url("https://images.unsplash.com/photo-1770321428549-f604459f3e21?w=1920&q=60&auto=format")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderBottom: '1px solid rgba(0, 163, 168, 0.2)',
      zIndex: 1001
    }}>
      <style>{`
        @media (max-width: 767px) {
          [data-testid="top-banner"] { display: none !important; }
        }
      `}</style>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        flexWrap: 'wrap',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <p style={{
          color: '#FFFFFF',
          fontSize: '0.9rem',
          fontWeight: '600',
          letterSpacing: '0.05em',
          margin: 0,
          textAlign: 'center'
        }}>
          LET'S DESIGN SOLUTIONS TOGETHER! <span style={{ color: 'var(--brand-primary)', fontWeight: '400' }}>Get in touch</span>
        </p>
        <button 
          onClick={scrollToContact}
          data-testid="banner-cta-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 18px',
            background: 'var(--brand-primary)',
            color: '#0a0b0a',
            border: 'none',
            borderRadius: '50px',
            fontSize: '0.8rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 163, 168, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Contact Us
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
