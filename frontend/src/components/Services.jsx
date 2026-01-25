import React from 'react';
import { Palette, Sparkles, Globe, TrendingUp, Code, Layers } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette size={32} />,
      title: 'Logo Design',
      description: 'Distinctive logos that capture your brand essence and make lasting impressions.'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Brand Identity & Strategy',
      description: 'Complete brand systems from strategy to visual identity that resonate with your audience.'
    },
    {
      icon: <Layers size={32} />,
      title: 'Graphic Design',
      description: 'Professional design solutions for all your marketing and communication needs.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Website Design & Development',
      description: 'Modern, fast, and conversion-focused websites built for growth.'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'SEO & Performance',
      description: 'Technical optimisation to ensure your site ranks well and loads lightning-fast.'
    },
    {
      icon: <Code size={32} />,
      title: 'Digital & Creative Solutions',
      description: 'End-to-end digital solutions tailored to your business goals.'
    }
  ];

  return (
    <section id="services" style={{
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
              className="card-hover-effect"
              style={{
                background: 'var(--bg-card)',
                padding: '40px',
                borderRadius: '8px',
                border: '1px solid var(--border-medium)',
                cursor: 'pointer'
              }}
            >
              <div style={{
                color: 'var(--brand-primary)',
                marginBottom: '20px'
              }}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;