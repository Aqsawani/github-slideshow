import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Tech Startup Branding',
      category: 'Brand Identity',
      description: 'Complete brand system for an innovative Australian fintech startup.',
      bgColor: '#302f2c'
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'High-converting online store with seamless user experience.',
      bgColor: '#3f4816'
    },
    {
      title: 'Professional Services',
      category: 'Logo & Branding',
      description: 'Sophisticated identity for a Melbourne-based law firm.',
      bgColor: '#302f2c'
    }
  ];

  return (
    <section id="work" style={{
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
            Selected Work
          </h2>
          <p className="body-medium" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Quality over quantity. Here's a glimpse of what we create.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-hover-effect"
              style={{
                background: project.bgColor,
                minHeight: '400px',
                borderRadius: '8px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-medium)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Project Content */}
              <div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--brand-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '16px'
                }}>
                  {project.category}
                </div>
                <h3 className="heading-3" style={{
                  marginBottom: '16px',
                  fontSize: '1.75rem',
                  textTransform: 'none'
                }}>
                  {project.title}
                </h3>
                <p className="body-small" style={{
                  color: 'var(--text-secondary)'
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
                fontSize: '0.9rem',
                marginTop: '24px'
              }}>
                View Project
                <ExternalLink size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;