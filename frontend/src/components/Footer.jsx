import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, MapPin, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer data-testid="footer" style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border-medium)',
      padding: '60px 40px 40px',
      position: 'relative'
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
              <span style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345c-.091.379-.293 1.194-.333 1.361-.052.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </span>
              <span style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </span>
              <span style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </span>
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
