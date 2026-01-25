import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const projects = [
    {
      title: 'Tech Startup Branding',
      category: 'Brand Identity',
      description: 'Complete brand system for an innovative Australian fintech startup.',
      gradient: 'linear-gradient(135deg, rgba(0, 163, 168, 0.2) 0%, rgba(0, 163, 168, 0.05) 100%)'
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'High-converting online store with seamless user experience.',
      gradient: 'linear-gradient(135deg, rgba(0, 163, 168, 0.15) 0%, rgba(0, 163, 168, 0.03) 100%)'
    },
    {
      title: 'Professional Services',
      category: 'Logo & Branding',
      description: 'Sophisticated identity for a Melbourne-based law firm.',
      gradient: 'linear-gradient(135deg, rgba(0, 163, 168, 0.25) 0%, rgba(0, 163, 168, 0.08) 100%)'
    }
  ];

  return (
    <section id="work" ref={sectionRef} style={{
      background: 'var(--gradient-dark)',
      padding: '120px 40px',
      position: 'relative',
      overflow: 'hidden',
      width: '100%'
    }}>
      <div className="container" style={{
        maxWidth: '1400px',
        margin: '0 auto'
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
            Portfolio
          </div>
          <h2 className="heading-2" style={{ marginBottom: '20px' }}>
            Selected Work
          </h2>
          <p className="body-medium" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Quality over quantity. Here's a glimpse of what we create.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px'
        }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card-hover-effect scroll-reveal ${isVisible ? 'visible' : ''}`}
              style={{
                background: project.gradient,
                minHeight: '450px',
                borderRadius: '20px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-medium)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                transitionDelay: `${index * 0.15}s`
              }}
            >
              {/* Decorative circle */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                border: '2px solid rgba(0, 163, 168, 0.2)',
                pointerEvents: 'none'
              }} />
              
              <div style={{
                position: 'absolute',
                bottom: '-100px',
                left: '-100px',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 163, 168, 0.1) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />

              {/* Project Content */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  color: 'var(--brand-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  marginBottom: '20px',
                  display: 'inline-block',
                  padding: '6px 16px',
                  background: 'rgba(0, 163, 168, 0.15)',
                  borderRadius: '50px',
                  border: '1px solid rgba(0, 163, 168, 0.3)'
                }}>
                  {project.category}
                </div>
                <h3 className="heading-3" style={{
                  marginBottom: '16px',
                  fontSize: '2rem',
                  textTransform: 'none',
                  color: 'var(--neutral-white)'
                }}>
                  {project.title}
                </h3>
                <p className="body-small" style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  {project.description}
                </p>
              </div>

              {/* View Project Link */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--brand-primary)',
                fontWeight: '600',
                fontSize: '1rem',
                marginTop: '24px',
                position: 'relative',
                zIndex: 1,
                transition: 'gap 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.gap = '12px'}
              onMouseLeave={(e) => e.currentTarget.style.gap = '8px'}>
                View Project
                <ExternalLink size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;