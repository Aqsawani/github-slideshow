import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    satisfaction: 0,
    experience: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    // Projects: 0 to 50
    let projectStep = 0;
    const projectInterval = setInterval(() => {
      projectStep++;
      setCounters(prev => ({
        ...prev,
        projects: Math.min(Math.floor((50 / steps) * projectStep), 50)
      }));
      if (projectStep >= steps) clearInterval(projectInterval);
    }, stepDuration);

    // Satisfaction: 0 to 100
    let satisfactionStep = 0;
    const satisfactionInterval = setInterval(() => {
      satisfactionStep++;
      setCounters(prev => ({
        ...prev,
        satisfaction: Math.min(Math.floor((100 / steps) * satisfactionStep), 100)
      }));
      if (satisfactionStep >= steps) clearInterval(satisfactionInterval);
    }, stepDuration);

    // Experience: 0 to 5
    let experienceStep = 0;
    const experienceInterval = setInterval(() => {
      experienceStep++;
      setCounters(prev => ({
        ...prev,
        experience: Math.min(Math.floor((5 / steps) * experienceStep), 5)
      }));
      if (experienceStep >= steps) clearInterval(experienceInterval);
    }, stepDuration);
  };

  return (
    <section id="home" style={{
      background: 'var(--gradient-dark)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 40px 80px',
      position: 'relative',
      overflow: 'hidden',
      width: '100%'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0, 163, 168, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 20s ease-in-out infinite',
        pointerEvents: 'none',
        maxWidth: '80vw'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 163, 168, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 15s ease-in-out infinite reverse',
        pointerEvents: 'none',
        maxWidth: '60vw'
      }} />

      <div className="container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Badge */}
        <div className="fade-in" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 20px',
          background: 'rgba(0, 163, 168, 0.1)',
          border: '1px solid rgba(0, 163, 168, 0.3)',
          borderRadius: '50px',
          marginBottom: '32px',
          fontSize: '0.9rem',
          color: 'var(--brand-primary)',
          fontWeight: '600'
        }}>
          <Sparkles size={16} />
          #1 Digital Agency Australia | Melbourne & Sydney
        </div>

        {/* Main Headline */}
        <h1 className="brand-display fade-in-up" style={{
          marginBottom: '32px',
          maxWidth: '1000px',
          margin: '0 auto 32px',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #00A3A8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Web Design, Logo & Branding Agency Australia
        </h1>

        {/* Subheading */}
        <p className="body-large fade-in-up animate-delay-2" style={{
          marginBottom: '48px',
          maxWidth: '700px',
          margin: '0 auto 48px',
          color: 'var(--text-secondary)',
          fontSize: '1.35rem',
          lineHeight: '1.6'
        }}>
          Logo Design, Brand Identity, Web Development, Shopify Stores & SEO — The Aussie Way.
        </p>

        {/* CTA Buttons */}
        <div className="fade-in-up animate-delay-3" style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '80px'
        }}>
          <button className="btn-primary" onClick={() => scrollToSection('contact')}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.05rem' }}>
            Get Free Quote
            <ArrowRight size={20} />
          </button>
          <a 
            href="https://www.instagram.com/ozlumeau?igsh=MWZydmI3Ync5MWlzZA%3D%3D&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary" 
            style={{ fontSize: '1.05rem', textDecoration: 'none', display: 'inline-block' }}
          >
            View Our Work
          </a>
        </div>

        {/* Animated Stats */}
        <div ref={statsRef} className="fade-in-up animate-delay-4" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '60px 0 0'
        }}>
          {/* Projects Delivered */}
          <div className="glass-effect" style={{
            padding: '40px 30px',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 163, 168, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            {/* Decorative glow */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(0, 163, 168, 0.2) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none'
            }} />
            
            <div style={{
              fontSize: '3.5rem',
              fontWeight: '900',
              color: 'var(--brand-primary)',
              marginBottom: '12px',
              lineHeight: '1',
              position: 'relative',
              zIndex: 1,
              background: 'linear-gradient(135deg, #00A3A8 0%, #00d4db 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {counters.projects}+
            </div>
            <div style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: '600',
              position: 'relative',
              zIndex: 1
            }}>
              Projects Delivered
            </div>
          </div>

          {/* Client Satisfaction */}
          <div className="glass-effect" style={{
            padding: '40px 30px',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 163, 168, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            {/* Decorative glow */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(0, 163, 168, 0.2) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none'
            }} />
            
            <div style={{
              fontSize: '3.5rem',
              fontWeight: '900',
              color: 'var(--brand-primary)',
              marginBottom: '12px',
              lineHeight: '1',
              position: 'relative',
              zIndex: 1,
              background: 'linear-gradient(135deg, #00A3A8 0%, #00d4db 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {counters.satisfaction}%
            </div>
            <div style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: '600',
              position: 'relative',
              zIndex: 1
            }}>
              Client Satisfaction
            </div>
          </div>

          {/* Years Experience */}
          <div className="glass-effect" style={{
            padding: '40px 30px',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 163, 168, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            {/* Decorative glow */}
            <div style={{
              position: 'absolute',
              bottom: '-50%',
              right: '-50%',
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(0, 163, 168, 0.2) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none'
            }} />
            
            <div style={{
              fontSize: '3.5rem',
              fontWeight: '900',
              color: 'var(--brand-primary)',
              marginBottom: '12px',
              lineHeight: '1',
              position: 'relative',
              zIndex: 1,
              background: 'linear-gradient(135deg, #00A3A8 0%, #00d4db 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {counters.experience}+
            </div>
            <div style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: '600',
              position: 'relative',
              zIndex: 1
            }}>
              Years Experience
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }
        
        @media (max-width: 767px) {
          .brand-display {
            font-size: 2.5rem !important;
          }
          
          .body-large {
            font-size: 1.1rem !important;
          }
          
          .fade-in-up.animate-delay-4 > div > div:first-child {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;