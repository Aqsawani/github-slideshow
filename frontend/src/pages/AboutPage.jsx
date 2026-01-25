import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, MapPin } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <section style={{
        paddingTop: '100px',
        paddingBottom: '30px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 20px',
              background: 'rgba(0, 163, 168, 0.1)',
              border: '1px solid rgba(0, 163, 168, 0.3)',
              borderRadius: '50px',
              marginBottom: '24px'
            }}>
              <span style={{ color: 'var(--brand-primary)', fontSize: '0.9rem', fontWeight: '500' }}>
                ✦ About Us
              </span>
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              color: 'var(--text-primary)',
              marginBottom: '24px',
              lineHeight: '1.1'
            }}>
              We Are <span style={{ color: 'var(--brand-primary)' }}>OZlume</span>
            </h1>
            
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              A passionate team of designers and developers building brands that stand out and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section style={{ padding: '50px 0', background: 'var(--bg-card)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '60px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(0, 163, 168, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <MapPin size={28} color="var(--brand-primary)" />
              </div>
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4px' }}>Based In</p>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: '700' }}>Melbourne, Australia</h3>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(0, 163, 168, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Users size={28} color="var(--brand-primary)" />
              </div>
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4px' }}>Team Size</p>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: '700' }}>5 Creatives</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '24px'
              }}>
                Our <span style={{ color: 'var(--brand-primary)' }}>Story</span>
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                marginBottom: '20px'
              }}>
                OZlume is a Melbourne-based creative agency founded with a simple mission: to help businesses 
                elevate their brand presence in the digital world.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                marginBottom: '20px'
              }}>
                Our team of 5 talented designers and developers brings together diverse expertise in 
                logo design, brand identity, web development, and digital marketing. We believe that 
                great design is not just about aesthetics—it's about creating meaningful connections 
                between brands and their audiences.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                lineHeight: '1.8'
              }}>
                From startups to established businesses, we've helped clients across Australia build 
                brands that truly stand out and scale.
              </p>
            </div>

            {/* Decorative Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 163, 168, 0.1) 0%, rgba(0, 163, 168, 0.05) 100%)',
              border: '1px solid rgba(0, 163, 168, 0.2)',
              borderRadius: '24px',
              padding: '50px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(0, 163, 168, 0.2) 0%, transparent 70%)',
                borderRadius: '50%'
              }}></div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--brand-primary)',
                marginBottom: '30px'
              }}>
                Why "OZlume"?
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                marginBottom: '20px'
              }}>
                <strong style={{ color: 'var(--text-primary)' }}>OZ</strong> represents our Australian roots 
                and pride in being a local agency.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                lineHeight: '1.8'
              }}>
                <strong style={{ color: 'var(--text-primary)' }}>ILUM</strong> (from "illuminate") reflects 
                our mission to bring light and clarity to your brand's vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-card)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '16px'
            }}>
              Our <span style={{ color: 'var(--brand-primary)' }}>Values</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {[
              { title: 'Quality First', description: 'We never compromise on the quality of our work. Every pixel matters.' },
              { title: 'Client Partnership', description: 'We work alongside you, not just for you. Your success is our success.' },
              { title: 'Innovation', description: 'We stay ahead of trends to deliver modern, future-proof solutions.' }
            ].map((value, index) => (
              <div
                key={index}
                style={{
                  padding: '40px',
                  background: 'var(--bg-page)',
                  border: '1px solid rgba(0, 163, 168, 0.2)',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(0, 163, 168, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(0, 163, 168, 0.2)';
                }}
              >
                <div style={{
                  width: '50px',
                  height: '4px',
                  background: 'var(--brand-primary)',
                  borderRadius: '2px',
                  marginBottom: '20px'
                }}></div>
                <h3 style={{
                  color: 'var(--text-primary)',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '12px'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 767px) {
          section > div > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
