import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Instagram, ExternalLink, ArrowRight } from 'lucide-react';

const WorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const instagramUrl = 'https://www.instagram.com/ozlumeau?igsh=MWZydmI3Ync5MWlzZA%3D%3D&utm_source=qr';

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <section style={{
        paddingTop: '160px',
        paddingBottom: '100px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Floating Orbs */}
        <div className="floating-orb" style={{ width: '500px', height: '500px', top: '5%', left: '-15%' }}></div>
        <div className="floating-orb" style={{ width: '400px', height: '400px', bottom: '5%', right: '-10%', animationDelay: '-5s' }}></div>
        <div className="floating-orb" style={{ width: '250px', height: '250px', top: '40%', right: '20%', animationDelay: '-10s' }}></div>

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
              margin: '0 auto 50px',
              lineHeight: '1.6'
            }}>
              Explore our latest projects and creative work on Instagram. We showcase our brand designs, 
              logo creations, and web development projects.
            </p>

            {/* Instagram CTA Card */}
            <div style={{
              maxWidth: '500px',
              margin: '0 auto',
              background: 'linear-gradient(135deg, rgba(0, 163, 168, 0.15) 0%, rgba(0, 163, 168, 0.05) 100%)',
              border: '1px solid rgba(0, 163, 168, 0.3)',
              borderRadius: '24px',
              padding: '50px 40px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Decorative gradient */}
              <div style={{
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '250px',
                height: '250px',
                background: 'radial-gradient(circle, rgba(0, 163, 168, 0.3) 0%, transparent 70%)',
                borderRadius: '50%'
              }}></div>

              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #E1306C 0%, #F77737 50%, #FCAF45 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                boxShadow: '0 10px 40px rgba(225, 48, 108, 0.4)'
              }}>
                <Instagram size={50} color="white" />
              </div>

              <h2 style={{
                color: 'var(--text-primary)',
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '12px'
              }}>
                @ozlumeau
              </h2>

              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                marginBottom: '30px',
                lineHeight: '1.6'
              }}>
                Follow us for daily inspiration, behind-the-scenes content, and our latest design work.
              </p>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="instagram-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #E1306C 0%, #F77737 50%, #FCAF45 100%)',
                  color: 'white',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(225, 48, 108, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(225, 48, 108, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(225, 48, 108, 0.4)';
                }}
              >
                Visit Our Instagram
                <ExternalLink size={20} />
              </a>
            </div>

            {/* Additional Info */}
            <div style={{
              marginTop: '80px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
              maxWidth: '800px',
              margin: '80px auto 0'
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
        </div>
      </section>

      {/* Services CTA */}
      <section style={{ padding: '80px 0', background: 'var(--bg-card)' }}>
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
