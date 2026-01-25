import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section style={{
      background: 'var(--secondary-olive)',
      padding: '120px 40px'
    }}>
      <div className="container" style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="heading-2" style={{ marginBottom: '20px' }}>
            Trusted by Growing Brands
          </h2>
        </div>

        {/* Testimonial */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            color: 'var(--brand-primary)',
            marginBottom: '24px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Quote size={48} />
          </div>
          <p className="body-large" style={{
            marginBottom: '32px',
            fontStyle: 'italic',
            color: 'var(--text-primary)'
          }}>
            "Trusted by startups, small businesses, and growing brands across Australia."
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            marginTop: '60px'
          }}>
            <div className="body-medium" style={{
              color: 'var(--text-secondary)'
            }}>
              Building partnerships with businesses that value quality, strategy, and growth.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;