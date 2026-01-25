import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Target, Zap, HeartHandshake } from 'lucide-react';

const WhyChoose = () => {
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

  const reasons = [
    {
      icon: <MapPin size={40} />,
      title: 'Australian-Based Agency',
      description: 'Local expertise with a deep understanding of the Australian market.',
      animation: 'bounce-rotate'
    },
    {
      icon: <Target size={40} />,
      title: 'Brand-First Approach',
      description: 'Every decision driven by your brand strategy and business goals.',
      animation: 'pulse-glow'
    },
    {
      icon: <Zap size={40} />,
      title: 'Fast, Scalable Solutions',
      description: 'Clean code, SEO-optimised websites, and designs built to scale.',
      animation: 'float-spin'
    },
    {
      icon: <HeartHandshake size={40} />,
      title: 'Clear Communication',
      description: 'Transparent process, honest timelines, and long-term support.',
      animation: 'swing-glow'
    }
  ];

  return (
    <section id="about" ref={sectionRef} style={{
      background: '#1e2827',
      padding: '120px 40px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0, 163, 168, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
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
            Why Choose Us
          </div>
          <h2 className="heading-2" style={{ marginBottom: '20px' }}>
            Why Choose Ozilum
          </h2>
          <p className="body-medium" style={{ maxWidth: '600px', margin: '0 auto' }}>
            We don't just deliver projects — we build partnerships.
          </p>
        </div>

        {/* Reasons Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px'
        }}>
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`scroll-reveal ${isVisible ? 'visible' : ''}`}
              style={{
                textAlign: 'center',
                transitionDelay: `${index * 0.15}s`
              }}
            >
              {/* Icon Container with Animation */}
              <div 
                className={`icon-animated ${reason.animation}`}
                style={{
                  color: 'var(--brand-primary)',
                  marginBottom: '24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100px',
                  height: '100px',
                  background: 'rgba(0, 163, 168, 0.1)',
                  borderRadius: '50%',
                  border: '2px solid rgba(0, 163, 168, 0.3)',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.15)';
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 163, 168, 0.5)';
                  e.currentTarget.style.borderColor = 'var(--brand-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(0, 163, 168, 0.3)';
                }}
              >
                {/* Animated rings */}
                <div className="icon-ring" style={{
                  position: 'absolute',
                  width: '120%',
                  height: '120%',
                  border: '2px solid rgba(0, 163, 168, 0.2)',
                  borderRadius: '50%',
                  animation: 'pulse-ring 2s ease-in-out infinite'
                }} />
                <div className="icon-ring" style={{
                  position: 'absolute',
                  width: '140%',
                  height: '140%',
                  border: '1px solid rgba(0, 163, 168, 0.1)',
                  borderRadius: '50%',
                  animation: 'pulse-ring 2s ease-in-out infinite 0.3s'
                }} />
                
                {reason.icon}
              </div>
              
              <h3 className="heading-3" style={{
                marginBottom: '12px',
                fontSize: '1.25rem',
                textTransform: 'none'
              }}>
                {reason.title}
              </h3>
              <p className="body-small" style={{
                color: 'var(--text-secondary)'
              }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Bounce and Rotate Animation */
        @keyframes bounce-rotate {
          0%, 100% { 
            transform: translateY(0) rotate(0deg); 
          }
          25% { 
            transform: translateY(-10px) rotate(5deg); 
          }
          50% { 
            transform: translateY(0) rotate(0deg); 
          }
          75% { 
            transform: translateY(-5px) rotate(-5deg); 
          }
        }
        
        .icon-animated.bounce-rotate {
          animation: bounce-rotate 3s ease-in-out infinite;
        }

        /* Pulse Glow Animation */
        @keyframes pulse-glow {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 0 0 rgba(0, 163, 168, 0);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(0, 163, 168, 0.4);
          }
        }
        
        .icon-animated.pulse-glow {
          animation: pulse-glow 2.5s ease-in-out infinite;
        }

        /* Float and Spin Animation */
        @keyframes float-spin {
          0% { 
            transform: translateY(0) rotate(0deg); 
          }
          25% { 
            transform: translateY(-12px) rotate(90deg); 
          }
          50% { 
            transform: translateY(0) rotate(180deg); 
          }
          75% { 
            transform: translateY(-12px) rotate(270deg); 
          }
          100% { 
            transform: translateY(0) rotate(360deg); 
          }
        }
        
        .icon-animated.float-spin {
          animation: float-spin 4s ease-in-out infinite;
        }

        /* Swing Glow Animation */
        @keyframes swing-glow {
          0%, 100% { 
            transform: rotate(0deg);
            filter: drop-shadow(0 0 0 rgba(0, 163, 168, 0));
          }
          25% { 
            transform: rotate(15deg);
            filter: drop-shadow(0 0 15px rgba(0, 163, 168, 0.5));
          }
          50% { 
            transform: rotate(0deg);
            filter: drop-shadow(0 0 0 rgba(0, 163, 168, 0));
          }
          75% { 
            transform: rotate(-15deg);
            filter: drop-shadow(0 0 15px rgba(0, 163, 168, 0.5));
          }
        }
        
        .icon-animated.swing-glow {
          animation: swing-glow 3s ease-in-out infinite;
        }

        /* Pulse Ring Animation */
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        /* Pause animation on hover */
        .icon-animated:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default WhyChoose;