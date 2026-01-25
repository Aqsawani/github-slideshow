import React from 'react';
import { MapPin, Target, Zap, HeartHandshake } from 'lucide-react';

const WhyChoose = () => {
  const reasons = [
    {
      icon: <MapPin size={28} />,
      title: 'Australian-Based Agency',
      description: 'Local expertise with a deep understanding of the Australian market.'
    },
    {
      icon: <Target size={28} />,
      title: 'Brand-First Approach',
      description: 'Every decision driven by your brand strategy and business goals.'
    },
    {
      icon: <Zap size={28} />,
      title: 'Fast, Scalable Solutions',
      description: 'Clean code, SEO-optimised websites, and designs built to scale.'
    },
    {
      icon: <HeartHandshake size={28} />,
      title: 'Clear Communication',
      description: 'Transparent process, honest timelines, and long-term support.'
    }
  ];

  return (
    <section id="about" style={{
      background: 'var(--secondary-olive)',
      padding: '120px 40px'
    }}>
      <div className="container" style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
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
              style={{
                textAlign: 'center'
              }}
            >
              <div style={{
                color: 'var(--brand-primary)',
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center'
              }}>
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
    </section>
  );
};

export default WhyChoose;