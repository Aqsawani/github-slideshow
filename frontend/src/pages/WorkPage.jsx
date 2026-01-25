import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Instagram, ExternalLink, ArrowRight } from 'lucide-react';

const WorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Load Behold widget script
    const script = document.createElement('script');
    script.src = 'https://w.behold.so/widget.js';
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://w.behold.so/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const instagramUrl = 'https://www.instagram.com/ozlumeau?igsh=MWZydmI3Ync5MWlzZA%3D%3D&utm_source=qr';

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <section style={{
        paddingTop: '120px',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 20px',
              background: 'rgba(0, 163, 168, 0.1)',
              border: '1px solid rgba(0, 163, 168, 0.3)',
              borderRadius: '50px',
              marginBottom: '24px'
            }}>
              <span style={{ color: 'var(--brand-primary)', fontSize: '0.9rem', fontWeight: '500' }}>
                ✦ Our Portfolio
              </span>
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              color: 'var(--text-primary)',
              marginBottom: '24px',
              lineHeight: '1.1'
            }}>
              See Our <span style={{ color: 'var(--brand-primary)' }}>Work</span>
            </h1>
            
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto 30px',
              lineHeight: '1.6'
            }}>
              Explore our latest projects and creative work. Our portfolio updates automatically from Instagram.
            </p>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #E1306C 0%, #F77737 50%, #FCAF45 100%)',
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                borderRadius: '50px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                marginBottom: '20px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(225, 48, 108, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Instagram size={20} />
              Follow @ozlumeau
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section style={{
        padding: '40px 40px 80px',
        background: 'var(--bg-card)'
      }}>
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '12px'
            }}>
              Latest Projects
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem'
            }}>
              Fresh from our Instagram feed
            </p>
          </div>
          
          {/* Behold Instagram Feed Widget */}
          <div 
            data-testid="instagram-feed"
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              background: 'var(--bg-page)',
              padding: '20px'
            }}
          >
            <div id="behold-pah5R7ZNuCxnnq1j3bld"></div>
            <script async src="https://cdn.behold.so/widget.js" data-feed="pah5R7ZNuCxnnq1j3bld"></script>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 40px', background: 'var(--bg-page)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '120+', label: 'Happy Clients' },
              { number: '5', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: 'var(--brand-primary)',
                  lineHeight: '1'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  marginTop: '8px'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 40px', background: 'var(--bg-card)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '16px'
          }}>
            Ready to Start Your Project?
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            marginBottom: '30px',
            maxWidth: '500px',
            margin: '0 auto 30px'
          }}>
            Let's create something amazing together. Get in touch to discuss your brand needs.
          </p>
          <a
            href="/#contact"
            data-testid="contact-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              background: 'var(--brand-primary)',
              color: 'var(--bg-page)',
              fontSize: '1rem',
              fontWeight: '600',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--brand-hover)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--brand-primary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Get a Quote
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkPage;
