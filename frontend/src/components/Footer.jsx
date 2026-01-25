import React from 'react';
import { Mail, MapPin, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
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
            <div style={{
              marginBottom: '16px'
            }}>
              <Logo size="large" />
            </div>
            <p className="body-small" style={{
              marginBottom: '24px',
              maxWidth: '300px'
            }}>
              Professional design and digital agency building brands that stand out and scale.
            </p>
            <div style={{
              display: 'flex',
              gap: '16px'
            }}>
              <a href="#" style={{
                color: 'var(--text-secondary)',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                <Linkedin size={20} />
              </a>
              <a href="#" style={{
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
              <li><a href="#services" className="nav-link" style={{ padding: 0 }}>Logo Design</a></li>
              <li><a href="#services" className="nav-link" style={{ padding: 0 }}>Brand Identity</a></li>
              <li><a href="#services" className="nav-link" style={{ padding: 0 }}>Web Development</a></li>
              <li><a href="#services" className="nav-link" style={{ padding: 0 }}>SEO & Performance</a></li>
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
                <a href="mailto:hello@ozilum.com.au" className="nav-link" style={{ padding: 0 }}>
                  hello@ozilum.com.au
                </a>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: 'var(--text-secondary)'
              }}>
                <MapPin size={18} />
                <span>Australia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '40px',
          borderTop: '1px solid var(--border-medium)',
          textAlign: 'center'
        }}>
          <p className="body-small">
            © {currentYear} Ozilum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;