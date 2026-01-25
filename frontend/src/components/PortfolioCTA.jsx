import React from 'react';
import { Instagram, ArrowRight, Sparkles } from 'lucide-react';

const PortfolioCTA = () => {
  return (
    <section style={{
      background: 'var(--gradient-dark)',
      padding: '120px 40px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background orbs */}
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0, 163, 168, 0.2) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        animation: 'float 20s ease-in-out infinite',
        pointerEvents: 'none'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0, 163, 168, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 15s ease-in-out infinite reverse',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Decorative badge */}
        <div className="fade-in" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 24px',
          background: 'rgba(0, 163, 168, 0.1)',
          border: '1px solid rgba(0, 163, 168, 0.3)',
          borderRadius: '50px',
          marginBottom: '32px',
          fontSize: '0.9rem',
          color: 'var(--brand-primary)',
          fontWeight: '600'
        }}>
          <Sparkles size={16} />
          Portfolio Showcase
        </div>

        {/* Main Headline */}
        <h2 className="heading-1 fade-in-up" style={{
          marginBottom: '24px',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #00A3A8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)'
        }}>
          See Our Work in Action
        </h2>

        {/* Description */}
        <p className="body-large fade-in-up animate-delay-1" style={{
          marginBottom: '48px',
          maxWidth: '700px',
          margin: '0 auto 48px',
          color: 'var(--text-secondary)',
          fontSize: '1.25rem',
          lineHeight: '1.6'
        }}>
          Explore our complete portfolio of stunning logos, brand identities, and digital designs on Instagram. Get inspired by real projects and see the quality we deliver.
        </p>

        {/* CTA Buttons */}
        <div className="fade-in-up animate-delay-2" style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '60px'
        }}>
          <a
            href="https://www.instagram.com/aqsalogoz_"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '1.1rem',
              padding: '1.2em 2.5em'
            }}
          >
            <Instagram size={24} />
            View Full Portfolio
            <ArrowRight size={20} />
          </a>
        </div>

        {/* Stats Grid */}
        <div className="fade-in-up animate-delay-3" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '60px 0 0',
          borderTop: '1px solid rgba(0, 163, 168, 0.2)'
        }}>
          {/* Instagram Followers */}
          <div className="glass-effect" style={{
            padding: '30px 20px',
            borderRadius: '16px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 163, 168, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #00A3A8 0%, #00d4db 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '8px'
            }}>
              100+
            </div>
            <div style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: '600'
            }}>
              Design Projects
            </div>
          </div>

          {/* Projects */}
          <div className="glass-effect" style={{
            padding: '30px 20px',
            borderRadius: '16px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 163, 168, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #00A3A8 0%, #00d4db 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '8px'
            }}>
              50+
            </div>
            <div style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: '600'
            }}>
              Happy Clients
            </div>
          </div>

          {/* Industries */}
          <div className="glass-effect" style={{
            padding: '30px 20px',
            borderRadius: '16px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 163, 168, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #00A3A8 0%, #00d4db 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '8px'
            }}>
              10+
            </div>
            <div style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: '600'
            }}>
              Industries Served
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }
      `}</style>
    </section>
  );
};

export default PortfolioCTA;
