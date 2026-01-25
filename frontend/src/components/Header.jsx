import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavigation = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  const goToHome = () => {
    setMobileMenuOpen(false);
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: scrolled ? 'rgba(26, 28, 27, 0.98)' : 'rgba(26, 28, 27, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      borderBottom: scrolled ? '1px solid rgba(0, 163, 168, 0.3)' : '1px solid var(--border-medium)',
      transition: 'all 0.3s ease',
      boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none'
    }}>
      <nav className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: scrolled ? '10px 40px' : '15px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
        transition: 'padding 0.3s ease'
      }}>
        {/* Logo */}
        <img 
          src="/images/ozilum-logo.png" 
          alt="Ozilum - Elevating Brands The OZ Way"
          onClick={goToHome}
          data-testid="header-logo"
          style={{
            height: scrolled ? '45px' : '55px',
            width: 'auto',
            cursor: 'pointer',
            transition: 'height 0.3s ease'
          }}
        />

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center'
        }} className="desktop-nav">
          <a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
          <a href="/work" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/work'); }}>Work</a>
          <a href="/about" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/about'); }}>About</a>
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
          data-testid="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--brand-primary)',
            cursor: 'pointer',
            padding: '8px',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu fade-in" data-testid="mobile-menu" style={{
          display: 'none',
          flexDirection: 'column',
          gap: '16px',
          padding: '20px 40px',
          background: 'var(--bg-page)',
          borderTop: '1px solid var(--border-medium)'
        }}>
          <a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
          <a href="/work" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/work'); }}>Work</a>
          <a href="/about" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigation('/about'); }}>About</a>
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
