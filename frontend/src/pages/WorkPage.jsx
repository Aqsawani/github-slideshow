import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Instagram, ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    image: '/projects/floras-botanicals.png',
    title: "Flora's Botanicals",
    category: 'Brand Identity & Packaging',
    description: 'Complete brand identity and packaging design for a premium botanicals company.'
  },
  {
    image: '/projects/gnomish-press.png',
    title: 'Gnomish Press',
    category: 'Logo Design',
    description: 'Custom logo design with multiple variations for a publishing company.'
  },
  {
    image: '/projects/basic-bricks.png',
    title: 'Basic Bricks',
    category: 'Logo Design',
    description: 'Hand-crafted logo concept for a construction and building company.'
  },
  {
    image: '/projects/logo-collection-1.png',
    title: 'Logo Collection',
    category: 'Logo Design',
    description: 'Custom logos for Bubbles & Mo, God Life Smoothies, Rent A Buggy, and ONI Helmets.'
  },
  {
    image: '/projects/logo-collection-2.png',
    title: 'Brand Showcase',
    category: 'Logo & Branding',
    description: 'Designs for Sunnyside Dental Care, AMT Landscape Services, Skeleton Crew, and more.'
  }
];

const instagramUrl = 'https://www.instagram.com/ozlumeau?igsh=MWZydmI3Ync5MWlzZA%3D%3D&utm_source=qr';

const WorkPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <Header />

      {/* Hero Section */}
      <section data-testid="work-hero" style={{
        paddingTop: '160px',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(180deg, rgba(10,11,10,0.92) 0%, rgba(26,29,27,0.95) 100%), url("https://images.unsplash.com/photo-1765539160785-e7953620488f?w=1920&q=50&auto=format")`,
          backgroundSize: 'cover', backgroundPosition: 'center', pointerEvents: 'none'
        }} />
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              display: 'inline-block', padding: '8px 20px',
              background: 'rgba(0, 163, 168, 0.1)', border: '1px solid rgba(0, 163, 168, 0.3)',
              borderRadius: '50px', marginBottom: '24px'
            }}>
              <span style={{ color: 'var(--brand-primary)', fontSize: '0.9rem', fontWeight: '500' }}>Our Portfolio</span>
            </div>
            <h1 data-testid="work-page-title" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800',
              color: '#FFFFFF', marginBottom: '24px', lineHeight: '1.1'
            }}>
              See Our Work
            </h1>
            <p style={{
              fontSize: '1.25rem', color: 'var(--text-secondary)',
              maxWidth: '600px', margin: '0 auto', lineHeight: '1.6'
            }}>
              A selection of recent projects showcasing our design expertise and creative approach.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section data-testid="projects-grid" style={{ padding: '60px 40px 80px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {projects.map((project, index) => (
              <div
                key={index}
                data-testid={`project-card-${index}`}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(0, 163, 168, 0.4)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 163, 168, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Image */}
                <div style={{
                  width: '100%',
                  height: '300px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category} by OZlume`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  {/* Category Badge */}
                  <div style={{
                    position: 'absolute', top: '16px', left: '16px',
                    padding: '6px 14px', background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '50px', fontSize: '0.75rem',
                    color: 'var(--brand-primary)', fontWeight: '600'
                  }}>
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontSize: '1.2rem', fontWeight: '700',
                    color: '#FFFFFF', marginBottom: '8px'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    color: 'var(--text-secondary)', fontSize: '0.9rem',
                    lineHeight: '1.6', margin: 0
                  }}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '60px 40px', background: 'var(--bg-card)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            textAlign: 'center'
          }}>
            {[
              { number: '150+', label: 'Projects Delivered' },
              { number: '120+', label: 'Happy Clients' },
              { number: '5', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--brand-primary)', marginBottom: '8px' }}>
                  {stat.number}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section data-testid="instagram-cta" style={{
        padding: '80px 40px',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Instagram size={40} color="var(--brand-primary)" style={{ marginBottom: '20px' }} />
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '700',
            color: '#FFFFFF', marginBottom: '16px'
          }}>
            Follow Us on Instagram
          </h2>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '1.1rem',
            marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px'
          }}>
            See our latest projects, behind-the-scenes, and design inspiration on Instagram.
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="see-more-instagram-btn"
            className="btn-primary"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontSize: '1.05rem', padding: '1.2em 2.5em', textDecoration: 'none'
            }}
          >
            See More Projects on Instagram <ExternalLink size={18} />
          </a>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 767px) {
          [data-testid="projects-grid"] > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WorkPage;
