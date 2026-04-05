import React from 'react';

const Clients = () => {
  const clients = [
    { name: 'Sarah Shulze Foundation', logo: '/clients/sarah-shulze.jpeg' },
    { name: 'Builders Brotherhood Construction', logo: '/clients/builders.jpeg' },
    { name: 'Texas Habanero', logo: '/clients/texas.jpeg' },
    { name: 'RiverTree Dental and Implants', logo: '/clients/rivertree.jpeg' },
    { name: 'Unchained Interactive', logo: '/clients/unchained.jpeg' },
    { name: 'StockDex', logo: '/clients/stockdex.jpeg' },
    { name: 'Winterbar Associates', logo: '/clients/winterbar.jpeg' },
    { name: 'Yin Yoga', logo: '/clients/yinyoga.jpeg' },
    { name: 'Four Cedars Counselling', logo: '/clients/cedars.jpeg' },
    { name: 'Obsessed with Better', logo: '/clients/obsessed.jpeg' },
    { name: 'Toshi Group', logo: '/clients/toshi.jpeg' },
    { name: 'Rezieo', logo: '/clients/rezieo.jpeg' }
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
            gap: '100px',
            animation: 'slide 35s linear infinite',
            width: 'fit-content'
          }}>
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="client-logo-container"
                style={{
                  flexShrink: 0,
                  width: '380px',
                  height: '250px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '40px',
                  border: '2px solid rgba(0, 163, 168, 0.15)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.08)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(0, 163, 168, 0.4)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 163, 168, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(0, 163, 168, 0.15)';
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
                    filter: 'brightness(1.15)',
                    transition: 'filter 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'brightness(1.25) drop-shadow(0 0 15px rgba(0, 163, 168, 0.4))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'brightness(1.15)';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px'
        }}>
          <p className="body-small" style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem'
          }}>
            Join these innovative companies and elevate your brand
          </p>
          
          {/* More of our work button */}
          <a
            href="https://www.instagram.com/ozlumeau?igsh=MWZydmI3Ync5MWlzZA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '1rem',
              padding: '1em 2em'
            }}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              style={{ marginRight: '4px' }}
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            More of Our Work
          </a>
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
            width: 280px !important;
            height: 180px !important;
            padding: 30px !important;
          }

          .clients-track {
            gap: 60px !important;
            animation: slide 25s linear infinite !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Clients;
