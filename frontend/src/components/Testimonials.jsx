import React from 'react';
import { Quote, Star, MapPin, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'laluna_traci',
      location: 'Australia',
      timeAgo: '1 year ago',
      review: "I am so happy with the end results, was a pleasure to work with. They understood exactly what I was looking for and created a fantastic logo beyond my expectations.. Just perfect. My business card is awesome also.. Another step closer to getting my business off the ground. Thank you OZlume, I wish you all the best."
    },
    {
      name: 'daviromi',
      location: 'France',
      timeAgo: '2 years ago',
      review: "OZlume delivered an impressive logo design and website that surpassed my expectations. The process was swift and effortless, reflecting their professionalism and design expertise. Highly Recommended!"
    },
    {
      name: 'prestige_sydney',
      location: 'Australia',
      timeAgo: 'A few days ago',
      review: "I highly recommend OZlume, they've been amazing to work with. Their service and communication to help me with my website has been amazing. Really happy with their work and the time and effort they put into making my website for me."
    }
  ];

  return (
    <section style={{
      background: '#1e2827',
      padding: '120px 40px'
    }}>
      <div className="container" style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'rgba(0, 163, 168, 0.1)',
            border: '1px solid rgba(0, 163, 168, 0.3)',
            borderRadius: '50px',
            marginBottom: '24px'
          }}>
            <span style={{ color: 'var(--brand-primary)', fontSize: '0.9rem', fontWeight: '500' }}>
              ✦ Testimonials
            </span>
          </div>
          <h2 className="heading-2" style={{ marginBottom: '20px' }}>
            Trusted by Growing Brands
          </h2>
          <p className="body-medium" style={{ 
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Don't just take our word for it — hear from our satisfied clients
          </p>
        </div>

        {/* Reviews Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {reviews.map((review, index) => (
            <div
              key={index}
              data-testid={`review-${index}`}
              style={{
                background: 'rgba(0, 163, 168, 0.05)',
                border: '1px solid rgba(0, 163, 168, 0.2)',
                borderRadius: '20px',
                padding: '32px',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(0, 163, 168, 0.5)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 163, 168, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(0, 163, 168, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Quote Icon */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                color: 'rgba(0, 163, 168, 0.2)'
              }}>
                <Quote size={40} />
              </div>

              {/* Stars */}
              <div style={{
                display: 'flex',
                gap: '4px',
                marginBottom: '20px'
              }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#00A3A8" color="#00A3A8" />
                ))}
              </div>

              {/* Review Text */}
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: '1.7',
                marginBottom: '24px',
                fontStyle: 'italic'
              }}>
                "{review.review}"
              </p>

              {/* Reviewer Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid rgba(0, 163, 168, 0.15)',
                paddingTop: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* Avatar Placeholder */}
                  <div style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(0, 163, 168, 0.3) 0%, rgba(0, 163, 168, 0.1) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: 'var(--brand-primary)'
                  }}>
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginBottom: '4px'
                    }}>
                      <span style={{
                        color: 'var(--text-primary)',
                        fontWeight: '600',
                        fontSize: '0.95rem'
                      }}>
                        @{review.name}
                      </span>
                      <CheckCircle size={14} color="#00A3A8" fill="#00A3A8" />
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem'
                    }}>
                      <MapPin size={12} />
                      <span>{review.location}</span>
                    </div>
                  </div>
                </div>
                <span style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.8rem'
                }}>
                  {review.timeAgo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          section > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
