import React from 'react';

const Clients = () => {
  const clients = [
    { name: 'Winterbar Associates', logo: '/clients/winterbar.jpeg' },
    { name: 'StockDex', logo: '/clients/stockdex.jpeg' },
    { name: 'Unchained Interactive', logo: '/clients/unchained.jpeg' },
    { name: 'Builders Brotherhood', logo: '/clients/builders.jpeg' },
    { name: 'Texas Habanero', logo: '/clients/texas.jpeg' }
  ];

  // Duplicate the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section style={{
      background: 'var(--bg-page)',
      padding: '100px 40px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'rgba(0, 163, 168, 0.1)',
            border: '1px solid rgba(0, 163, 168, 0.3)',
            borderRadius: '50px',
            marginBottom: '20px',
            fontSize: '0.85rem',
            color: 'var(--brand-primary)',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Trusted By
          </div>
          <h2 className="heading-2" style={{ marginBottom: '20px' }}>
            Our Top Clients
          </h2>
          <p className="body-medium" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Proud to work with industry-leading brands and innovative companies.
          </p>
        </div>

        {/* Infinite Sliding Carousel */}
        <div style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          padding: '40px 0'
        }}>
          {/* Gradient Overlays */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '200px',
            height: '100%',
            background: 'linear-gradient(90deg, var(--bg-page), transparent)',
            zIndex: 2,
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '200px',
            height: '100%',
            background: 'linear-gradient(270deg, var(--bg-page), transparent)',
            zIndex: 2,
            pointerEvents: 'none'
          }} />

          {/* Sliding Track */}
          <div className="clients-track" style={{
            display: 'flex',
            gap: '80px',
            animation: 'slide 30s linear infinite',
            width: 'fit-content'
          }}>
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="client-logo-container"
                style={{
                  flexShrink: 0,
                  width: '200px',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid rgba(0, 163, 168, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(0, 163, 168, 0.3)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 163, 168, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(0, 163, 168, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    filter: 'grayscale(100%) brightness(1.2)',
                    transition: 'filter 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%) brightness(1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%) brightness(1.2)';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div style={{
          textAlign: 'center',
          marginTop: '40px'
        }}>
          <p className="body-small" style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem'
          }}>
            Join these innovative companies and elevate your brand
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .clients-track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 767px) {
          .client-logo-container {
            width: 150px !important;
            height: 100px !important;
          }

          .clients-track {
            gap: 40px !important;
            animation: slide 20s linear infinite !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Clients;
