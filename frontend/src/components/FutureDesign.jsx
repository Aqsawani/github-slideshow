import React from 'react';

const tools = [
  { name: 'Figma', svg: (
    <svg viewBox="0 0 38 57" fill="none" width="32" height="32">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
    </svg>
  )},
  { name: 'Photoshop', svg: (
    <svg viewBox="0 0 40 40" width="32" height="32">
      <rect width="40" height="40" rx="6" fill="#001E36"/>
      <text x="5" y="28" fill="#31A8FF" fontSize="16" fontWeight="bold" fontFamily="Arial">Ps</text>
    </svg>
  )},
  { name: 'Illustrator', svg: (
    <svg viewBox="0 0 40 40" width="32" height="32">
      <rect width="40" height="40" rx="6" fill="#330000"/>
      <text x="7" y="28" fill="#FF9A00" fontSize="16" fontWeight="bold" fontFamily="Arial">Ai</text>
    </svg>
  )},
  { name: 'Shopify', svg: (
    <svg viewBox="0 0 40 40" width="32" height="32">
      <rect width="40" height="40" rx="6" fill="#96BF48" fillOpacity="0.15"/>
      <text x="5" y="26" fill="#96BF48" fontSize="11" fontWeight="bold" fontFamily="Arial">Shop</text>
    </svg>
  )},
  { name: 'React', svg: (
    <svg viewBox="0 0 40 40" width="32" height="32">
      <circle cx="20" cy="20" r="3" fill="#61DAFB"/>
      <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(0 20 20)"/>
      <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 20 20)"/>
      <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 20 20)"/>
    </svg>
  )},
  { name: 'WordPress', svg: (
    <svg viewBox="0 0 40 40" width="32" height="32">
      <circle cx="20" cy="20" r="18" fill="none" stroke="#21759B" strokeWidth="1.5"/>
      <text x="10" y="26" fill="#21759B" fontSize="16" fontWeight="bold" fontFamily="serif">W</text>
    </svg>
  )},
  { name: 'Next.js', svg: (
    <svg viewBox="0 0 40 40" width="32" height="32">
      <circle cx="20" cy="20" r="18" fill="#000" stroke="#fff" strokeWidth="1"/>
      <text x="9" y="26" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="Arial">N</text>
    </svg>
  )},
  { name: 'Canva', svg: (
    <svg viewBox="0 0 40 40" width="32" height="32">
      <circle cx="20" cy="20" r="18" fill="#00C4CC" fillOpacity="0.15"/>
      <text x="8" y="26" fill="#00C4CC" fontSize="13" fontWeight="bold" fontFamily="Arial">Ca</text>
    </svg>
  )},
  { name: 'Sketch', svg: (
    <svg viewBox="0 0 40 40" width="32" height="32">
      <polygon points="20,4 36,16 30,36 10,36 4,16" fill="none" stroke="#F7B500" strokeWidth="1.5"/>
      <polygon points="20,4 36,16 20,36 4,16" fill="#F7B500" fillOpacity="0.15"/>
    </svg>
  )},
  { name: 'Webflow', svg: (
    <svg viewBox="0 0 40 40" width="32" height="32">
      <rect width="40" height="40" rx="6" fill="#4353FF" fillOpacity="0.15"/>
      <text x="5" y="26" fill="#4353FF" fontSize="11" fontWeight="bold" fontFamily="Arial">Wf</text>
    </svg>
  )}
];

const duplicatedTools = [...tools, ...tools];

const FutureDesign = () => {
  return (
    <section data-testid="future-design-section" style={{
      padding: '100px 40px',
      background: 'var(--bg-card)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle bg image overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(180deg, rgba(26,29,27,0.95) 0%, rgba(10,11,10,0.98) 100%), url("https://images.unsplash.com/photo-1773981921548-6deb23d472e0?w=1920&q=40&auto=format")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'inline-block',
          padding: '8px 20px',
          background: 'rgba(0, 163, 168, 0.1)',
          border: '1px solid rgba(0, 163, 168, 0.3)',
          borderRadius: '50px',
          marginBottom: '24px',
          fontSize: '0.85rem',
          color: 'var(--brand-primary)',
          fontWeight: '600'
        }}>
          Innovation
        </div>

        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '700',
          color: '#FFFFFF',
          marginBottom: '16px',
          lineHeight: '1.15',
          maxWidth: '800px',
          margin: '0 auto 16px'
        }}>
          Leading the Future of Design With Smart, Modern Technologies
        </h2>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          maxWidth: '600px',
          margin: '0 auto 60px',
          lineHeight: '1.6'
        }}>
          We use the best tools in the industry to deliver exceptional results for every project.
        </p>

        {/* Animated tools row */}
        <div style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          padding: '20px 0'
        }}>
          {/* Fade edges */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '120px', height: '100%',
            background: 'linear-gradient(90deg, var(--bg-card), transparent)',
            zIndex: 2, pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute', top: 0, right: 0, width: '120px', height: '100%',
            background: 'linear-gradient(270deg, var(--bg-card), transparent)',
            zIndex: 2, pointerEvents: 'none'
          }} />

          <div className="tools-track" style={{
            display: 'flex',
            gap: '48px',
            alignItems: 'center',
            animation: 'slideTools 25s linear infinite',
            width: 'fit-content'
          }}>
            {duplicatedTools.map((tool, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                flexShrink: 0,
                opacity: 0.7,
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.7';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {tool.svg}
                </div>
                <span style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideTools {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .tools-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default FutureDesign;
