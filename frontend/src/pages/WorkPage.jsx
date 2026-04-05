import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Instagram, ExternalLink } from 'lucide-react';

const projects = [
  {
    image: '/projects/floras-botanicals.png',
    title: "Flora's Botanicals",
    category: 'Brand Identity & Packaging'
  },
  {
    image: '/projects/gnomish-press.png',
    title: 'Gnomish Press',
    category: 'Logo Design'
  },
  {
    image: '/projects/novaflow.jpg',
    title: 'NovaFlow',
    category: 'Web App Design'
  },
  {
    image: '/projects/sharpstyle.jpg',
    title: 'SharpStyle Barbershop',
    category: 'Web Development'
  },
  {
    image: '/projects/home-rental.jpg',
    title: 'Home Rental Platform',
    category: 'Web Development'
  },
  {
    image: '/projects/nexora-consulting.jpg',
    title: 'Nexora Consulting',
    category: 'Web Design'
  },
  {
    image: '/projects/four-seagulls.jpg',
    title: 'Four Seagulls Beach House',
    category: 'Brand Identity'
  },
  {
    image: '/projects/logo-collection-1.png',
    title: 'Logo Collection',
    category: 'Logo Design'
  },
  {
    image: '/projects/logo-collection-2.png',
    title: 'Brand Showcase',
    category: 'Logo & Branding'
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
      <section data-testid="projects-grid" style={{ padding: '60px 40px 40px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            {projects.map((project, index) => (
              <div
                key={index}
                data-testid={`project-card-${index}`}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
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
                <div style={{
                  width: '100%',
                  height: '260px',
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
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    padding: '5px 12px', background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '50px', fontSize: '0.7rem',
                    color: 'var(--brand-primary)', fontWeight: '600'
                  }}>
                    {project.category}
                  </div>
                </div>
                <div style={{ padding: '16px 20px' }}>
                  <h3 style={{
                    fontSize: '1.05rem', fontWeight: '600',
                    color: '#FFFFFF', margin: 0
                  }}>
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA - right below the photos */}
          <div data-testid="instagram-cta" style={{
            textAlign: 'center',
            marginTop: '48px',
            paddingBottom: '20px'
          }}>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="see-more-instagram-btn"
              className="btn-primary"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                fontSize: '1.05rem', padding: '1.1em 2.2em', textDecoration: 'none'
              }}
            >
              <Instagram size={20} />
              See More Projects on Instagram
              <ExternalLink size={16} />
            </a>
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
              { number: '180+', label: 'Projects Delivered' },
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

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          [data-testid="projects-grid"] > div > div:first-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          [data-testid="projects-grid"] > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WorkPage;
