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
      padding: '120px 40px',
      position: 'relative',
      overflow: 'hidden',
      width: '100%'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(0, 163, 168, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        pointerEvents: 'none',
        maxWidth: '90vw'
      }} />

      <div className="container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Section Header */}
        <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'rgba(0, 163, 168, 0.1)',
            border: '1px solid rgba(0, 163, 168, 0.3)',
            borderRadius: '50px',
            marginBottom: '20px',
            fontSize: '0.85rem',
            color: 'var(--brand-primary)',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            What We Do
          </div>
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
                background: 'linear-gradient(135deg, rgba(26, 29, 27, 0.8) 0%, rgba(35, 39, 38, 0.6) 100%)',
                padding: '40px',
                borderRadius: '16px',
                border: '1px solid var(--border-medium)',
                cursor: 'pointer',
                transitionDelay: `${index * 0.1}s`,
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(0, 163, 168, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }} />

              <div style={{
                color: 'var(--brand-primary)',
                marginBottom: '24px',
                transition: 'transform 0.3s ease',
                position: 'relative',
                zIndex: 1
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}>
                {service.icon}
              </div>
              <h3 className="heading-3" style={{
                marginBottom: '16px',
                fontSize: '1.5rem',
                textTransform: 'none',
                position: 'relative',
                zIndex: 1
              }}>
                {service.title}
              </h3>
              <p className="body-small" style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: '24px',
                position: 'relative',
                zIndex: 1
              }}>
                {service.description}
              </p>
              <div style={{
                color: 'var(--brand-primary)',
                fontSize: '0.9rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                position: 'relative',
                zIndex: 1,
                transition: 'gap 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.gap = '12px'}
              onMouseLeave={(e) => e.currentTarget.style.gap = '8px'}>
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