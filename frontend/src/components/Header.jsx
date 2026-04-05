import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const services = [
    { name: 'Logo Design', slug: 'logo-design' },
    { name: 'Brand Identity', slug: 'brand-identity' },
    { name: 'Graphic Design', slug: 'graphic-design' },
    { name: 'Web Development', slug: 'web-development' },
    { name: 'SEO & Performance', slug: 'seo-performance' },
    { name: 'Digital Solutions', slug: 'digital-solutions' }
  ];

  const navTo = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <header data-testid="header" style={{
      position: 'fixed',
      top: '56px',
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(10, 11, 10, 0.95)' : 'rgba(10, 11, 10, 0.7)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: isScrolled ? '1px solid var(--border-medium)' : '1px solid transparent'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px'
      }}>
        {/* Logo */}
        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => navTo('/')}>
          <img 
            src="/images/ozilum-logo.png" 
            alt="OZlume - Creative Design Agency"
            data-testid="header-logo"
            style={{
              height: '48px',
              width: 'auto',
              filter: 'drop-shadow(0 0 6px rgba(0, 163, 168, 0.25))'
            }}
          />
        </div>

        {/* Desktop Nav */}
        <nav data-testid="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <button onClick={() => navTo('/')} className="nav-link" data-testid="nav-home"
            style={{ background: 'none', border: 'none', padding: '8px 16px', color: location.pathname === '/' ? 'var(--brand-primary)' : 'var(--text-secondary)', fontWeight: location.pathname === '/' ? '600' : '400', cursor: 'pointer', fontSize: '0.9rem', transition: 'color 0.3s ease' }}>
            Home
          </button>

          {/* Services Dropdown */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="nav-link" data-testid="nav-services"
              style={{ background: 'none', border: 'none', padding: '8px 16px', color: isActive('/services') ? 'var(--brand-primary)' : 'var(--text-secondary)', fontWeight: isActive('/services') ? '600' : '400', cursor: 'pointer', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px', transition: 'color 0.3s ease' }}>
              Services <ChevronDown size={14} style={{ transition: 'transform 0.3s', transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
            </button>
            {isServicesOpen && (
              <div data-testid="services-dropdown" style={{
                position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                marginTop: '8px', minWidth: '220px',
                background: 'rgba(26, 29, 27, 0.98)', backdropFilter: 'blur(20px)',
                border: '1px solid var(--border-medium)', borderRadius: '12px',
                padding: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
              }}>
                <button onClick={() => navTo('/services')} style={{
                  display: 'block', width: '100%', textAlign: 'left', padding: '10px 16px',
                  background: 'none', border: 'none', color: 'var(--brand-primary)', fontSize: '0.85rem',
                  fontWeight: '600', cursor: 'pointer', borderRadius: '8px', marginBottom: '4px',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(0, 163, 168, 0.1)'}
                onMouseLeave={(e) => e.target.style.background = 'none'}>
                  All Services
                </button>
                <div style={{ height: '1px', background: 'var(--border-medium)', margin: '4px 0' }} />
                {services.map((s) => (
                  <button key={s.slug} onClick={() => navTo(`/services/${s.slug}`)} style={{
                    display: 'block', width: '100%', textAlign: 'left', padding: '10px 16px',
                    background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '0.85rem',
                    cursor: 'pointer', borderRadius: '8px', transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => { e.target.style.background = 'rgba(0, 163, 168, 0.1)'; e.target.style.color = '#FFFFFF'; }}
                  onMouseLeave={(e) => { e.target.style.background = 'none'; e.target.style.color = 'var(--text-secondary)'; }}>
                    {s.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => navTo('/work')} className="nav-link" data-testid="nav-work"
            style={{ background: 'none', border: 'none', padding: '8px 16px', color: isActive('/work') ? 'var(--brand-primary)' : 'var(--text-secondary)', fontWeight: isActive('/work') ? '600' : '400', cursor: 'pointer', fontSize: '0.9rem', transition: 'color 0.3s ease' }}>
            Work
          </button>

          <button onClick={() => navTo('/about')} className="nav-link" data-testid="nav-about"
            style={{ background: 'none', border: 'none', padding: '8px 16px', color: isActive('/about') ? 'var(--brand-primary)' : 'var(--text-secondary)', fontWeight: isActive('/about') ? '600' : '400', cursor: 'pointer', fontSize: '0.9rem', transition: 'color 0.3s ease' }}>
            About
          </button>

          <button onClick={() => navTo('/faq')} className="nav-link" data-testid="nav-faq"
            style={{ background: 'none', border: 'none', padding: '8px 16px', color: isActive('/faq') ? 'var(--brand-primary)' : 'var(--text-secondary)', fontWeight: isActive('/faq') ? '600' : '400', cursor: 'pointer', fontSize: '0.9rem', transition: 'color 0.3s ease' }}>
            FAQ
          </button>

          <button onClick={() => navTo('/client-login')} className="nav-link" data-testid="nav-client-login"
            style={{ background: 'none', border: 'none', padding: '8px 16px', color: isActive('/client-login') ? 'var(--brand-primary)' : 'var(--text-secondary)', fontWeight: isActive('/client-login') ? '600' : '400', cursor: 'pointer', fontSize: '0.9rem', transition: 'color 0.3s ease' }}>
            Client Login
          </button>

          <button onClick={() => navTo('/contact')} className="btn-primary" data-testid="nav-contact-btn"
            style={{ marginLeft: '12px', padding: '10px 24px', fontSize: '0.85rem' }}>
            Get a Quote
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none', border: 'none', color: '#FFFFFF',
            cursor: 'pointer', padding: '8px'
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div data-testid="mobile-menu" style={{
        display: isMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        padding: '16px 40px 32px',
        background: 'rgba(10, 11, 10, 0.98)',
        borderTop: '1px solid var(--border-medium)'
      }}>
        <button onClick={() => navTo('/')} style={{ background: 'none', border: 'none', padding: '14px 0', color: '#FFFFFF', fontSize: '1rem', cursor: 'pointer', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Home</button>
        <button onClick={() => navTo('/services')} style={{ background: 'none', border: 'none', padding: '14px 0', color: '#FFFFFF', fontSize: '1rem', cursor: 'pointer', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Services</button>
        <button onClick={() => navTo('/work')} style={{ background: 'none', border: 'none', padding: '14px 0', color: '#FFFFFF', fontSize: '1rem', cursor: 'pointer', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Work</button>
        <button onClick={() => navTo('/about')} style={{ background: 'none', border: 'none', padding: '14px 0', color: '#FFFFFF', fontSize: '1rem', cursor: 'pointer', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>About</button>
        <button onClick={() => navTo('/faq')} style={{ background: 'none', border: 'none', padding: '14px 0', color: '#FFFFFF', fontSize: '1rem', cursor: 'pointer', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>FAQ</button>
        <button onClick={() => navTo('/client-login')} style={{ background: 'none', border: 'none', padding: '14px 0', color: '#FFFFFF', fontSize: '1rem', cursor: 'pointer', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Client Login</button>
        <button onClick={() => navTo('/contact')} className="btn-primary" style={{ marginTop: '16px', textAlign: 'center', fontSize: '0.95rem' }}>Get a Quote</button>
      </div>

      <style>{`
        @media (max-width: 767px) {
          [data-testid="desktop-nav"] { display: none !important; }
          [data-testid="mobile-menu-toggle"] { display: block !important; }
          [data-testid="header"] { top: 0 !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
