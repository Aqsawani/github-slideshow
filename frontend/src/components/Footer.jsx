import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, MapPin, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer data-testid="footer" style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border-medium)',
      padding: '60px 40px 40px'
    }}>
      <div className="container" style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '60px',
          marginBottom: '60px'
        }}>
          {/* Company Info */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <img 
                src="/images/ozilum-logo.png" 
                alt="OZlume - Creative Design and Branding"
                data-testid="footer-logo"
                style={{
                  height: '60px',
                  width: 'auto',
                  filter: 'drop-shadow(0 0 6px rgba(0, 163, 168, 0.3))'
                }}
              />
            </div>
            <p className="body-small" style={{
              marginBottom: '12px',
              maxWidth: '300px'
            }}>
              Creative design and branding services.
            </p>
            <p className="body-small" style={{
              marginBottom: '24px',
              maxWidth: '300px',
              color: 'var(--text-muted)'
            }}>
              Helping businesses grow through design.
            </p>
            <div style={{
              display: 'flex',
              gap: '16px'
            }}>
              <a href="https://www.instagram.com/ozlumeau?igsh=MWZydmI3Ync5MWlzZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" data-testid="footer-instagram" style={{
                color: 'var(--text-secondary)',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              color: 'var(--text-primary)',
              fontSize: '1rem',
              fontWeight: '700',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Services
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <li>
                <a 
                  onClick={(e) => { e.preventDefault(); navigate('/services/logo-design'); window.scrollTo(0, 0); }}
                  className="nav-link" 
                  style={{ padding: 0, cursor: 'pointer' }}
                >
                  Logo Design
                </a>
              </li>
              <li>
                <a 
                  onClick={(e) => { e.preventDefault(); navigate('/services/brand-identity'); window.scrollTo(0, 0); }}
                  className="nav-link" 
                  style={{ padding: 0, cursor: 'pointer' }}
                >
                  Brand Identity
                </a>
              </li>
              <li>
                <a 
                  onClick={(e) => { e.preventDefault(); navigate('/services/web-development'); window.scrollTo(0, 0); }}
                  className="nav-link" 
                  style={{ padding: 0, cursor: 'pointer' }}
                >
                  Web Development
                </a>
              </li>
              <li>
                <a 
                  onClick={(e) => { e.preventDefault(); navigate('/services/seo-performance'); window.scrollTo(0, 0); }}
                  className="nav-link" 
                  style={{ padding: 0, cursor: 'pointer' }}
                >
                  SEO & Performance
                </a>
              </li>
              <li>
                <a 
                  onClick={(e) => { e.preventDefault(); navigate('/client-login'); window.scrollTo(0, 0); }}
                  className="nav-link"
                  data-testid="footer-client-login"
                  style={{ padding: 0, cursor: 'pointer' }}
                >
                  Client Login
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              color: 'var(--text-primary)',
              fontSize: '1rem',
              fontWeight: '700',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Contact
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: 'var(--text-secondary)'
              }}>
                <Mail size={18} />
                <a href="mailto:contact@ozlume.com.au" className="nav-link" data-testid="footer-email" style={{ padding: 0 }}>
                  contact@ozlume.com.au
                </a>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: 'var(--text-secondary)'
              }}>
                <Phone size={18} />
                <a href="https://wa.me/61452039863" target="_blank" rel="noopener noreferrer" className="nav-link" data-testid="footer-phone" style={{ padding: 0 }}>
                  0452 039 863 (WhatsApp)
                </a>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: 'var(--text-secondary)'
              }}>
                <MapPin size={18} />
                <span>Melbourne, Australia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '40px',
          borderTop: '1px solid var(--border-medium)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p className="body-small" style={{ margin: 0 }}>
            &copy; OZlume. All rights reserved.
          </p>
          <p className="body-small" style={{ margin: 0, color: 'var(--text-muted)' }}>
            Creative design and branding services
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          footer > div > div:last-child {
            flex-direction: column;
            text-align: center;
            width: 100%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
