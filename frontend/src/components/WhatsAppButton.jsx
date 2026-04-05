import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '61452039863';
  const message = 'Hi OZlume! I would like to discuss a project.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float-btn"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
        zIndex: 9000,
        transition: 'all 0.3s ease',
        textDecoration: 'none'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 28px rgba(37, 211, 102, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.4)';
      }}
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="#FFFFFF">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.13 6.742 3.05 9.378L1.054 31.29l6.166-1.963C9.758 31.04 12.77 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.318 22.6c-.39 1.1-1.932 2.012-3.182 2.278-.854.18-1.97.324-5.726-1.23-4.808-1.99-7.898-6.872-8.138-7.192-.23-.32-1.932-2.574-1.932-4.908s1.222-3.482 1.656-3.96c.434-.478.948-.598 1.264-.598.316 0 .632.004.908.016.29.014.682-.112 1.068.814.39.94 1.33 3.248 1.448 3.484.118.238.196.514.038.828-.158.316-.236.514-.474.79-.236.278-.498.62-.712.832-.236.236-.482.49-.208.962.274.472 1.22 2.012 2.618 3.262 1.798 1.608 3.314 2.106 3.786 2.342.472.236.748.196 1.024-.118.274-.316 1.186-1.382 1.502-1.858.316-.478.632-.396 1.066-.236.434.158 2.742 1.294 3.214 1.53.472.236.786.354.904.55.118.196.118 1.136-.272 2.234z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
