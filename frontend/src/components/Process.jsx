import React from 'react';
import { Search, Pencil, Hammer, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: <Search size={32} />,
      title: 'Discover',
      description: 'We dive deep into your business, goals, and target audience to understand what makes you unique.'
    },
    {
      number: '02',
      icon: <Pencil size={32} />,
      title: 'Design',
      description: 'Our team crafts stunning visuals and brand systems that capture your essence and resonate with your market.'
    },
    {
      number: '03',
      icon: <Hammer size={32} />,
      title: 'Build',
      description: 'Clean code, scalable architecture, and SEO-optimised development bring your vision to life.'
    },
    {
      number: '04',
      icon: <Rocket size={32} />,
      title: 'Grow',
      description: 'Launch with confidence and ongoing support to help your brand thrive in the digital landscape.'
    }
  ];

  return (
    <section style={{
      background: 'var(--bg-page)',
      padding: '120px 40px'
    }}>
      <div className="container" style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="heading-2" style={{ marginBottom: '20px' }}>
            Our Process
          </h2>
          <p className="body-medium" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Simple, professional, confidence-building.
          </p>
        </div>

        {/* Process Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px'
        }}>
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                position: 'relative'
              }}
            >
              {/* Step Number */}
              <div style={{
                fontSize: '4rem',
                fontWeight: '900',
                color: 'var(--border-medium)',
                lineHeight: '1',
                marginBottom: '20px'
              }}>
                {step.number}
              </div>

              {/* Icon */}
              <div style={{
                color: 'var(--brand-primary)',
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="heading-3" style={{
                marginBottom: '12px',
                fontSize: '1.5rem',
                textTransform: 'none'
              }}>
                {step.title}
              </h3>

              {/* Description */}
              <p className="body-small" style={{
                color: 'var(--text-secondary)'
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;