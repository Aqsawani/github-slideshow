import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Palette, Sparkles, Globe, TrendingUp, Code, Layers, ArrowRight, Check } from 'lucide-react';

const ServicesListPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Palette size={36} />,
      title: 'Logo Design',
      slug: 'logo-design',
      description: 'Distinctive logos that capture your brand essence and make lasting impressions. We create custom, trademark-ready logos with multiple concepts and unlimited revisions.',
      highlights: ['Multiple concept options', 'Unlimited revisions', 'All file formats included', 'Brand guidelines']
    },
    {
      icon: <Sparkles size={36} />,
      title: 'Brand Identity & Strategy',
      slug: 'brand-identity',
      description: 'Complete brand systems from strategy to visual identity. We develop your entire brand personality including logo, colors, typography, and comprehensive brand guidelines.',
      highlights: ['Brand strategy document', 'Visual identity system', 'Brand voice & messaging', 'Stationery designs']
    },
    {
      icon: <Layers size={36} />,
      title: 'Graphic Design',
      slug: 'graphic-design',
      description: 'Professional design solutions for marketing materials, digital assets, and print collateral. Clean, impactful designs that drive results.',
      highlights: ['Brochures & flyers', 'Social media graphics', 'Print advertisements', 'Email templates']
    },
    {
      icon: <Globe size={36} />,
      title: 'Website Design & Development',
      slug: 'web-development',
      description: 'Modern, responsive websites and Shopify stores built for growth. We combine stunning design with clean code for sites that convert visitors into customers.',
      highlights: ['Mobile-first design', 'Shopify expertise', 'SEO optimized', '6 months support']
    },
    {
      icon: <TrendingUp size={36} />,
      title: 'SEO & Performance',
      slug: 'seo-performance',
      description: 'Technical optimization to ensure your website ranks well on Google and loads lightning-fast. Better visibility means more customers finding your business.',
      highlights: ['Technical SEO audit', 'Speed optimization', 'Monthly reporting', 'Google Search Console']
    },
    {
      icon: <Code size={36} />,
      title: 'Digital & Creative Solutions',
      slug: 'digital-solutions',
      description: 'End-to-end digital solutions tailored to your business goals. From web applications to digital marketing, we handle everything your brand needs online.',
      highlights: ['Digital strategy', 'Marketing automation', 'Email campaigns', 'Analytics & reporting']
    }
  ];

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <Header />

      {/* Hero */}
      <section data-testid="services-hero" style={{
        paddingTop: '160px',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(180deg, rgba(10,11,10,0.92) 0%, rgba(26,29,27,0.95) 100%), url("https://images.unsplash.com/photo-1693159682618-074078ed271e?w=1920&q=50&auto=format")`,
          backgroundSize: 'cover', backgroundPosition: 'center', pointerEvents: 'none'
        }} />
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              display: 'inline-block', padding: '8px 20px',
              background: 'rgba(0, 163, 168, 0.1)', border: '1px solid rgba(0, 163, 168, 0.3)',
              borderRadius: '50px', marginBottom: '24px'
            }}>
              <span style={{ color: 'var(--brand-primary)', fontSize: '0.9rem', fontWeight: '500' }}>What We Do</span>
            </div>
            <h1 data-testid="services-page-title" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800',
              color: '#FFFFFF', marginBottom: '24px', lineHeight: '1.1'
            }}>
              Our Services
            </h1>
            <p style={{
              fontSize: '1.25rem', color: 'var(--text-secondary)',
              maxWidth: '600px', margin: '0 auto', lineHeight: '1.6'
            }}>
              Expert-led design and digital solutions to help your brand grow. Every project gets a custom approach.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '60px 40px 100px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px'
          }}>
            {services.map((service, index) => (
              <div
                key={index}
                data-testid={`service-card-${service.slug}`}
                onClick={() => { navigate(`/services/${service.slug}`); window.scrollTo(0, 0); }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '40px',
                  padding: '48px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--brand-primary)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 163, 168, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div style={{ color: 'var(--brand-primary)', marginBottom: '20px' }}>{service.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '16px' }}>{service.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '24px' }}>{service.description}</p>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    color: 'var(--brand-primary)', fontSize: '0.95rem', fontWeight: '600'
                  }}>
                    Learn More <ArrowRight size={16} />
                  </div>
                </div>
                <div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>What's Included</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {service.highlights.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Check size={16} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '80px 40px',
        background: 'var(--bg-card)',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '700', color: '#FFFFFF', marginBottom: '16px' }}>
          Ready to Start Your Project?
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '30px', maxWidth: '500px', margin: '0 auto 30px' }}>
          Every project is unique. Get in touch for a free consultation and custom quote.
        </p>
        <button
          className="btn-primary"
          data-testid="services-cta-btn"
          onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1.05rem', padding: '1.2em 2.5em' }}
        >
          Get Free Quote <ArrowRight size={20} />
        </button>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 767px) {
          [data-testid^="service-card-"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesListPage;
