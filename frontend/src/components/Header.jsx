import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(26, 28, 27, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      borderBottom: '1px solid var(--border-medium)'
    }}>
      <nav className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Logo */}
        <Logo size="medium" onClick={() => scrollToSection('home')} />

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center'
        }} className="desktop-nav">
          <a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
          <a href="#work" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}>Work</a>
          <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          <button className="btn-primary" onClick={() => scrollToSection('contact')}
            style={{ padding: '0.75em 1.5em', fontSize: '0.9rem' }}>
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--brand-primary)',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu" style={{
          display: 'none',
          flexDirection: 'column',
          gap: '16px',
          padding: '20px 40px',
          background: 'var(--bg-page)',
          borderTop: '1px solid var(--border-medium)'
        }}>
          <a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
          <a href="#work" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}>Work</a>
          <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          <button className="btn-primary" onClick={() => scrollToSection('contact')}>
            Get a Quote
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;