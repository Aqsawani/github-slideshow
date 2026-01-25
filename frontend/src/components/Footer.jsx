import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, MapPin, Instagram, Phone, Github } from 'lucide-react';
import { FaPinterest } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

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
              <img 
                src="/images/ozilum-logo.png" 
                alt="OZlume - Elevating Brands The OZ Way"
                data-testid="footer-logo"
                style={{
                  height: '60px',
                  width: 'auto',
                  filter: 'drop-shadow(0 0 6px rgba(0, 163, 168, 0.3))'
                }}
              />
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
              <a href="https://www.instagram.com/ozlumeau?igsh=MWZydmI3Ync5MWlzZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{
                color: 'var(--text-secondary)',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                <Instagram size={20} />
              </a>
              <span style={{
                color: 'var(--text-secondary)',
                cursor: 'default'
              }}>
                <Github size={20} />
              </span>
              <span style={{
                color: 'var(--text-secondary)',
                cursor: 'default'
              }}>
                <FaPinterest size={20} />
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
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/services/logo-design');
                    window.scrollTo(0, 0);
                  }}
                  className="nav-link" 
                  style={{ padding: 0, cursor: 'pointer' }}
                >
                  Logo Design
                </a>
              </li>
              <li>
                <a 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/services/brand-identity');
                    window.scrollTo(0, 0);
                  }}
                  className="nav-link" 
                  style={{ padding: 0, cursor: 'pointer' }}
                >
                  Brand Identity
                </a>
              </li>
              <li>
                <a 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/services/web-development');
                    window.scrollTo(0, 0);
                  }}
                  className="nav-link" 
                  style={{ padding: 0, cursor: 'pointer' }}
                >
                  Web Development
                </a>
              </li>
              <li>
                <a 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/services/seo-performance');
                    window.scrollTo(0, 0);
                  }}
                  className="nav-link" 
                  style={{ padding: 0, cursor: 'pointer' }}
                >
                  SEO & Performance
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
                <a href="mailto:contact@ozlume.com" className="nav-link" style={{ padding: 0 }}>
                  contact@ozlume.com
                </a>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: 'var(--text-secondary)'
              }}>
                <Phone size={18} />
                <a href="https://wa.me/61452039863" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ padding: 0 }}>
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
            © OZlume. All rights reserved.
          </p>
          
          {/* Australian Flags */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)'
            }}>
              <span>Proudly Australian</span>
            </div>
            
            {/* Australian Flag */}
            <div style={{
              width: '40px',
              height: '26px',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 163, 168, 0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 163, 168, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            title="Australian Flag">
              <svg viewBox="0 0 60 30" style={{ width: '100%', height: '100%' }}>
                <rect width="60" height="30" fill="#00008B"/>
                <polygon points="0,0 0,6 6,0" fill="#fff"/>
                <polygon points="0,0 0,3.6 3.6,0" fill="#C8102E"/>
                <polygon points="0,30 6,30 0,24" fill="#fff"/>
                <polygon points="0,30 3.6,30 0,26.4" fill="#C8102E"/>
                <polygon points="30,0 24,0 30,6" fill="#fff"/>
                <polygon points="30,0 26.4,0 30,3.6" fill="#C8102E"/>
                <polygon points="30,30 30,24 24,30" fill="#fff"/>
                <polygon points="30,30 30,26.4 26.4,30" fill="#C8102E"/>
                <rect x="12" width="6" height="30" fill="#fff"/>
                <rect x="13.2" width="3.6" height="30" fill="#C8102E"/>
                <rect y="12" width="30" height="6" fill="#fff"/>
                <rect y="13.2" width="30" height="3.6" fill="#C8102E"/>
                {/* Stars */}
                <polygon points="50,4 50.6,6 52.8,6 51,7.4 51.6,9.4 50,8 48.4,9.4 49,7.4 47.2,6 49.4,6" fill="#fff"/>
                <polygon points="40,18 40.6,20 42.8,20 41,21.4 41.6,23.4 40,22 38.4,23.4 39,21.4 37.2,20 39.4,20" fill="#fff"/>
                <polygon points="50,16 50.4,17.4 52,17.4 50.8,18.3 51.2,19.7 50,18.8 48.8,19.7 49.2,18.3 48,17.4 49.6,17.4" fill="#fff"/>
                <polygon points="54,10 54.4,11.4 56,11.4 54.8,12.3 55.2,13.7 54,12.8 52.8,13.7 53.2,12.3 52,11.4 53.6,11.4" fill="#fff"/>
                <polygon points="46,10 46.4,11.4 48,11.4 46.8,12.3 47.2,13.7 46,12.8 44.8,13.7 45.2,12.3 44,11.4 45.6,11.4" fill="#fff"/>
                <polygon points="48,24 48.4,25.4 50,25.4 48.8,26.3 49.2,27.7 48,26.8 46.8,27.7 47.2,26.3 46,25.4 47.6,25.4" fill="#fff"/>
              </svg>
            </div>

            {/* Aboriginal Flag */}
            <div style={{
              width: '40px',
              height: '26px',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 163, 168, 0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 163, 168, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            title="Aboriginal Flag">
              <svg viewBox="0 0 60 30" style={{ width: '100%', height: '100%' }}>
                <rect width="60" height="15" fill="#000"/>
                <rect y="15" width="60" height="15" fill="#E4002B"/>
                <circle cx="30" cy="15" r="7" fill="#FFCE00"/>
              </svg>
            </div>

            {/* Torres Strait Islander Flag */}
            <div style={{
              width: '40px',
              height: '26px',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 163, 168, 0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 163, 168, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            title="Torres Strait Islander Flag">
              <svg viewBox="0 0 60 30" style={{ width: '100%', height: '100%' }}>
                <rect width="60" height="30" fill="#00843D"/>
                <rect width="60" height="9" fill="#003DA5"/>
                <rect y="21" width="60" height="9" fill="#003DA5"/>
                <rect y="9" width="60" height="12" fill="#000"/>
                <polygon points="30,10 31,13 34,13 31.5,14.8 32.5,18 30,16 27.5,18 28.5,14.8 26,13 29,13" fill="#fff"/>
                <circle cx="30" cy="15" r="5" fill="#fff"/>
                <path d="M 25,15 L 35,15 M 30,10 L 30,20" stroke="#000" strokeWidth="0.5" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          footer > div > div:last-child {
            flex-direction: column;
            text-align: center;
            width: 100%;
          }
          
          footer > div > div:last-child > div:last-child {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
