import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Palette, Sparkles, Globe, TrendingUp, Code, Layers } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Palette size={32} />,
      title: 'Logo Design',
      description: 'Distinctive logos that capture your brand essence and make lasting impressions.',
      link: '/services/logo-design'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Brand Identity & Strategy',
      description: 'Complete brand systems from strategy to visual identity that resonate with your audience.',
      link: '/services/brand-identity'
    },
    {
      icon: <Layers size={32} />,
      title: 'Graphic Design',
      description: 'Professional design solutions for all your marketing and communication needs.',
      link: '/services/graphic-design'
    },
    {
      icon: <Globe size={32} />,
      title: 'Website Design & Development',
      description: 'Modern, fast, and conversion-focused websites built for growth.',
      link: '/services/web-development'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'SEO & Performance',
      description: 'Technical optimisation to ensure your site ranks well and loads lightning-fast.',
      link: '/services/seo-performance'
    },
    {
      icon: <Code size={32} />,
      title: 'Digital & Creative Solutions',
      description: 'End-to-end digital solutions tailored to your business goals.',
      link: '/services/digital-solutions'
    }
  ];

  return (
    <section id="services" ref={sectionRef} style={{
      background: 'var(--bg-page)',
      padding: '120px 40px'
    }}>
      <div className="container" style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="heading-2" style={{ marginBottom: '20px' }}>
            Our Services
          </h2>
          <p className="body-medium" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Expert-led design and digital solutions for Australian businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`card-hover-effect scroll-reveal ${isVisible ? 'visible' : ''}`}
              onClick={() => navigate(service.link)}
              style={{
                background: 'var(--bg-card)',
                padding: '40px',
                borderRadius: '8px',
                border: '1px solid var(--border-medium)',
                cursor: 'pointer',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div style={{
                color: 'var(--brand-primary)',
                marginBottom: '20px',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                {service.icon}
              </div>
              <h3 className="heading-3" style={{
                marginBottom: '16px',
                fontSize: '1.5rem',
                textTransform: 'none'
              }}>
                {service.title}
              </h3>
              <p className="body-small" style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                {service.description}
              </p>
              <div style={{
                marginTop: '20px',
                color: 'var(--brand-primary)',
                fontSize: '0.9rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;