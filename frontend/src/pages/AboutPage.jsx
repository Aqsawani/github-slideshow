import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, MapPin, Lightbulb, Heart, Target } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <section data-testid="about-hero" style={{
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
                About Us
              </span>
            </div>
            
            <h1 data-testid="about-title" style={{
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
              A creative design agency helping businesses build strong, memorable brands.
            </p>
          </div>
        </div>
      </section>

      {/* Location Bar */}
      <section style={{ padding: '50px 0', background: 'var(--bg-card)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '60px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '60px', height: '60px', borderRadius: '50%',
                background: 'rgba(0, 163, 168, 0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <MapPin size={28} color="var(--brand-primary)" />
              </div>
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4px' }}>Based In</p>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: '700' }}>Melbourne, Australia</h3>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '60px', height: '60px', borderRadius: '50%',
                background: 'rgba(0, 163, 168, 0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
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

      {/* Who We Are */}
      <section data-testid="about-who-we-are" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '60px',
            alignItems: 'start'
          }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '24px'
              }}>
                Who We <span style={{ color: 'var(--brand-primary)' }}>Are</span>
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                marginBottom: '20px'
              }}>
                OZlume is a Melbourne-based creative agency with a team of 5 designers and developers 
                who are passionate about building brands that stand out.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                lineHeight: '1.8'
              }}>
                We work with startups, small businesses, and growing companies to create logos, 
                brand identities, websites, and digital experiences that connect with their audience 
                and drive real results.
              </p>
            </div>

            <div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '24px'
              }}>
                What We <span style={{ color: 'var(--brand-primary)' }}>Do</span>
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                marginBottom: '20px'
              }}>
                From logo design and brand strategy to web development and SEO, we offer a complete 
                range of creative and digital services. Every project starts with understanding your 
                business, your goals, and your audience.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                lineHeight: '1.8'
              }}>
                We don't believe in one-size-fits-all solutions. Each brand we work with gets a 
                custom approach tailored to their specific needs and vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section data-testid="about-approach" style={{ padding: '80px 0', background: 'var(--bg-card)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '16px'
            }}>
              Our <span style={{ color: 'var(--brand-primary)' }}>Approach</span>
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              We focus on quality, creativity, and clear communication at every step.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {[
              { 
                icon: <Lightbulb size={28} color="var(--brand-primary)" />,
                title: 'Creative Thinking', 
                description: 'We approach every project with fresh ideas and creative solutions that make your brand memorable.' 
              },
              { 
                icon: <Heart size={28} color="var(--brand-primary)" />,
                title: 'Quality First', 
                description: 'We never rush or cut corners. Every detail matters, from concept to final delivery.' 
              },
              { 
                icon: <Target size={28} color="var(--brand-primary)" />,
                title: 'Results Focused', 
                description: 'Great design should do more than look good — it should help your business grow and succeed.' 
              }
            ].map((value, index) => (
              <div
                key={index}
                data-testid={`approach-card-${index}`}
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
                <div style={{ marginBottom: '20px' }}>
                  {value.icon}
                </div>
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
