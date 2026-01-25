import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" style={{
      background: 'var(--bg-page)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 40px 80px',
      position: 'relative'
    }}>
      <div className="container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {/* Main Headline */}
        <h1 className="brand-display" style={{
          marginBottom: '24px',
          maxWidth: '900px',
          margin: '0 auto 24px'
        }}>
          Building Brands That Stand Out and Scale
        </h1>

        {/* Subheading */}
        <p className="body-large" style={{
          marginBottom: '48px',
          maxWidth: '700px',
          margin: '0 auto 48px',
          color: 'var(--text-secondary)'
        }}>
          Logo Design, Branding, Web Development & Digital Growth — The Australian Way.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button className="btn-primary" onClick={() => scrollToSection('contact')}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            Get a Quote
            <ArrowRight size={18} />
          </button>
          <button className="btn-secondary" onClick={() => scrollToSection('work')}>
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;