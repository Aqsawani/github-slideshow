import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" style={{
      background: 'var(--gradient-dark)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 40px 80px',
      position: 'relative',
      overflow: 'hidden',
      width: '100%'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0, 163, 168, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 20s ease-in-out infinite',
        pointerEvents: 'none',
        maxWidth: '80vw'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 163, 168, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 15s ease-in-out infinite reverse',
        pointerEvents: 'none',
        maxWidth: '60vw'
      }} />

      <div className="container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Badge */}
        <div className="fade-in" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 20px',
          background: 'rgba(0, 163, 168, 0.1)',
          border: '1px solid rgba(0, 163, 168, 0.3)',
          borderRadius: '50px',
          marginBottom: '32px',
          fontSize: '0.9rem',
          color: 'var(--brand-primary)',
          fontWeight: '600'
        }}>
          <Sparkles size={16} />
          Premium Design & Digital Agency
        </div>

        {/* Main Headline */}
        <h1 className="brand-display fade-in-up" style={{
          marginBottom: '32px',
          maxWidth: '1000px',
          margin: '0 auto 32px',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #00A3A8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Building Brands That Stand Out and Scale
        </h1>

        {/* Subheading */}
        <p className="body-large fade-in-up animate-delay-2" style={{
          marginBottom: '48px',
          maxWidth: '700px',
          margin: '0 auto 48px',
          color: 'var(--text-secondary)',
          fontSize: '1.35rem',
          lineHeight: '1.6'
        }}>
          Logo Design, Branding, Web Development & Digital Growth — The Australian Way.
        </p>

        {/* CTA Buttons */}
        <div className="fade-in-up animate-delay-3" style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '60px'
        }}>
          <button className="btn-primary" onClick={() => scrollToSection('contact')}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.05rem' }}>
            Get a Quote
            <ArrowRight size={20} />
          </button>
          <button className="btn-secondary" onClick={() => scrollToSection('work')}
            style={{ fontSize: '1.05rem' }}>
            View Our Work
          </button>
        </div>

        {/* Stats */}
        <div className="fade-in-up animate-delay-4" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '40px 0 0'
        }}>
          <div>
            <div style={{
              fontSize: '3rem',
              fontWeight: '900',
              color: 'var(--brand-primary)',
              marginBottom: '8px',
              lineHeight: '1'
            }}>
              50+
            </div>
            <div style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: '600'
            }}>
              Projects Delivered
            </div>
          </div>
          <div>
            <div style={{
              fontSize: '3rem',
              fontWeight: '900',
              color: 'var(--brand-primary)',
              marginBottom: '8px',
              lineHeight: '1'
            }}>
              100%
            </div>
            <div style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: '600'
            }}>
              Client Satisfaction
            </div>
          </div>
          <div>
            <div style={{
              fontSize: '3rem',
              fontWeight: '900',
              color: 'var(--brand-primary)',
              marginBottom: '8px',
              lineHeight: '1'
            }}>
              5+
            </div>
            <div style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: '600'
            }}>
              Years Experience
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

export default Hero;