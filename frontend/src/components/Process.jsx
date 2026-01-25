import React, { useEffect, useRef, useState } from 'react';
import { Search, Pencil, Hammer, Rocket } from 'lucide-react';

const Process = () => {
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

  const steps = [
    {
      number: '01',
      icon: <Search size={32} />,
      title: 'Discover',
      description: 'We dive deep into your business, goals, and target audience to understand what makes you unique.',
      gradient: 'linear-gradient(135deg, rgba(0, 163, 168, 0.15), rgba(0, 163, 168, 0.05))'
    },
    {
      number: '02',
      icon: <Pencil size={32} />,
      title: 'Design',
      description: 'Our team crafts stunning visuals and brand systems that capture your essence and resonate with your market.',
      gradient: 'linear-gradient(135deg, rgba(0, 163, 168, 0.2), rgba(0, 163, 168, 0.08))'
    },
    {
      number: '03',
      icon: <Hammer size={32} />,
      title: 'Build',
      description: 'Clean code, scalable architecture, and SEO-optimised development bring your vision to life.',
      gradient: 'linear-gradient(135deg, rgba(0, 163, 168, 0.18), rgba(0, 163, 168, 0.06))'
    },
    {
      number: '04',
      icon: <Rocket size={32} />,
      title: 'Grow',
      description: 'Launch with confidence and ongoing support to help your brand thrive in the digital landscape.',
      gradient: 'linear-gradient(135deg, rgba(0, 163, 168, 0.25), rgba(0, 163, 168, 0.1))'
    }
  ];

  return (
    <section ref={sectionRef} style={{
      background: 'var(--gradient-dark)',
      padding: '120px 40px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(0, 163, 168, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{
        maxWidth: '1200px',
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
            How We Work
          </div>
          <h2 className="heading-2" style={{ marginBottom: '20px' }}>
            Our Process
          </h2>
          <p className="body-medium" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Simple, professional, confidence-building.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div style={{
          position: 'relative',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '50px',
            top: '80px',
            bottom: '80px',
            width: '2px',
            background: 'linear-gradient(180deg, transparent, rgba(0, 163, 168, 0.3) 10%, rgba(0, 163, 168, 0.3) 90%, transparent)',
            zIndex: 0
          }} className="timeline-line" />

          {/* Process Steps */}
          {steps.map((step, index) => (
            <div
              key={index}
              className={`scroll-reveal ${isVisible ? 'visible' : ''}`}
              style={{
                position: 'relative',
                marginBottom: index < steps.length - 1 ? '60px' : '0',
                transitionDelay: `${index * 0.2}s`,
                display: 'flex',
                alignItems: 'center',
                gap: '40px'
              }}
            >
              {/* Number Badge */}
              <div 
                className="step-number-badge"
                style={{
                  width: '100px',
                  height: '100px',
                  flexShrink: 0,
                  background: step.gradient,
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(0, 163, 168, 0.3)',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotate(-5deg) scale(1.1)';
                  e.currentTarget.style.borderColor = 'var(--brand-primary)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 163, 168, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(0, 163, 168, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '900',
                  background: 'linear-gradient(135deg, #00A3A8 0%, #00d4db 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '4px'
                }}>
                  {step.number}
                </div>
                <div style={{
                  color: 'var(--brand-primary)',
                  transform: 'scale(0.9)'
                }}>
                  {step.icon}
                </div>
              </div>

              {/* Step Card */}
              <div 
                className="glass-effect step-card"
                style={{
                  flex: 1,
                  padding: '32px 40px',
                  borderRadius: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(10px)';
                  e.currentTarget.style.background = 'rgba(26, 29, 27, 0.9)';
                  e.currentTarget.style.borderColor = 'var(--brand-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.background = 'rgba(26, 29, 27, 0.6)';
                  e.currentTarget.style.borderColor = 'rgba(0, 163, 168, 0.2)';
                }}
              >
                {/* Animated beam */}
                <div className="card-beam" style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(0, 163, 168, 0.2), transparent)',
                  animation: 'beam-slide 3s ease-in-out infinite',
                  animationDelay: `${index * 0.5}s`
                }} />

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 className="heading-3" style={{
                    marginBottom: '12px',
                    fontSize: '1.75rem',
                    textTransform: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    {step.title}
                    <div style={{
                      width: '50px',
                      height: '2px',
                      background: 'var(--brand-primary)',
                      transition: 'width 0.4s ease'
                    }} className="title-underline" />
                  </h3>
                  <p className="body-small" style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.7',
                    fontSize: '1.05rem'
                  }}>
                    {step.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle at top right, rgba(0, 163, 168, 0.15), transparent)',
                  pointerEvents: 'none'
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`} style={{
          textAlign: 'center',
          marginTop: '80px',
          transitionDelay: '0.8s'
        }}>
          <p className="body-medium" style={{
            marginBottom: '24px',
            color: 'var(--text-secondary)'
          }}>
            Ready to start your project?
          </p>
          <button 
            className="btn-primary"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              fontSize: '1.05rem',
              padding: '1.2em 2.5em'
            }}
          >
            Let's Get Started
          </button>
        </div>
      </div>

      <style>{`
        @keyframes beam-slide {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        .step-card:hover .title-underline {
          width: 100px !important;
        }

        .step-number-badge {
          animation: badge-pulse 3s ease-in-out infinite;
        }

        @keyframes badge-pulse {
          0%, 100% { 
            box-shadow: 0 0 0 rgba(0, 163, 168, 0);
          }
          50% { 
            box-shadow: 0 0 30px rgba(0, 163, 168, 0.3);
          }
        }

        @media (max-width: 767px) {
          .timeline-line {
            left: 30px !important;
          }
          
          .step-number-badge {
            width: 70px !important;
            height: 70px !important;
          }
          
          .step-card {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;

const Process = () => {
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

  const steps = [
    {
      number: '01',
      icon: <Search size={32} />,
      title: 'Discover',
      description: 'We dive deep into your business, goals, and target audience to understand what makes you unique.',
      color: 'rgba(0, 163, 168, 0.2)'
    },
    {
      number: '02',
      icon: <Pencil size={32} />,
      title: 'Design',
      description: 'Our team crafts stunning visuals and brand systems that capture your essence and resonate with your market.',
      color: 'rgba(0, 163, 168, 0.3)'
    },
    {
      number: '03',
      icon: <Hammer size={32} />,
      title: 'Build',
      description: 'Clean code, scalable architecture, and SEO-optimised development bring your vision to life.',
      color: 'rgba(0, 163, 168, 0.25)'
    },
    {
      number: '04',
      icon: <Rocket size={32} />,
      title: 'Grow',
      description: 'Launch with confidence and ongoing support to help your brand thrive in the digital landscape.',
      color: 'rgba(0, 163, 168, 0.35)'
    }
  ];

  return (
    <section ref={sectionRef} style={{
      background: 'var(--gradient-dark)',
      padding: '120px 40px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0, 163, 168, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 20s ease-in-out infinite',
        pointerEvents: 'none'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 163, 168, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 15s ease-in-out infinite reverse',
        pointerEvents: 'none'
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
            How We Work
          </div>
          <h2 className="heading-2" style={{ marginBottom: '20px' }}>
            Our Process
          </h2>
          <p className="body-medium" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Simple, professional, confidence-building.
          </p>
        </div>

        {/* Process Timeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          position: 'relative'
        }}>
          {/* Connecting line for desktop */}
          <div style={{
            position: 'absolute',
            top: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(0, 163, 168, 0.3) 20%, rgba(0, 163, 168, 0.3) 80%, transparent)',
            zIndex: 0
          }} className="desktop-line" />

          {steps.map((step, index) => (
            <div
              key={index}
              className={`scroll-reveal ${isVisible ? 'visible' : ''}`}
              style={{
                textAlign: 'center',
                position: 'relative',
                transitionDelay: `${index * 0.2}s`
              }}
            >
              {/* Icon Container with Animation */}
              <div 
                className="process-icon-animated"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '120px',
                  height: '120px',
                  background: `linear-gradient(135deg, ${step.color}, rgba(0, 163, 168, 0.05))`,
                  borderRadius: '50%',
                  border: '2px solid rgba(0, 163, 168, 0.3)',
                  marginBottom: '24px',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  backdropFilter: 'blur(10px)',
                  zIndex: 1
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.15) translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 163, 168, 0.4)';
                  e.currentTarget.style.borderColor = 'var(--brand-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(0, 163, 168, 0.3)';
                }}
              >
                {/* Number badge */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #00A3A8 0%, #00d4db 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  fontWeight: '900',
                  color: 'var(--text-inverse)',
                  border: '3px solid var(--bg-page)',
                  boxShadow: '0 4px 15px rgba(0, 163, 168, 0.4)'
                }}>
                  {step.number}
                </div>

                {/* Animated rings */}
                <div className="process-ring" style={{
                  position: 'absolute',
                  width: '130%',
                  height: '130%',
                  border: '2px solid rgba(0, 163, 168, 0.2)',
                  borderRadius: '50%',
                  animation: 'pulse-ring 3s ease-in-out infinite'
                }} />
                <div className="process-ring" style={{
                  position: 'absolute',
                  width: '150%',
                  height: '150%',
                  border: '1px solid rgba(0, 163, 168, 0.1)',
                  borderRadius: '50%',
                  animation: 'pulse-ring 3s ease-in-out infinite 0.5s'
                }} />
                
                <div style={{ 
                  color: 'var(--brand-primary)',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {step.icon}
                </div>
              </div>

              {/* Step Content */}
              <h3 className="heading-3" style={{
                marginBottom: '16px',
                fontSize: '1.5rem',
                textTransform: 'none'
              }}>
                {step.title}
              </h3>
              <p className="body-small" style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                maxWidth: '280px',
                margin: '0 auto'
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`} style={{
          textAlign: 'center',
          marginTop: '80px',
          transitionDelay: '0.8s'
        }}>
          <p className="body-medium" style={{
            marginBottom: '24px',
            color: 'var(--text-secondary)'
          }}>
            Ready to start your project?
          </p>
          <button 
            className="btn-primary"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              fontSize: '1.05rem',
              padding: '1.2em 2.5em'
            }}
          >
            Let's Get Started
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        .process-icon-animated {
          animation: process-bob 3s ease-in-out infinite;
        }

        @keyframes process-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .process-icon-animated:hover {
          animation-play-state: paused;
        }

        @media (max-width: 767px) {
          .desktop-line {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;