import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [sectionsVisible, setSectionsVisible] = useState({
    hero: false,
    benefits: false,
    process: false,
    deliverables: false,
    pricing: false
  });

  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const processRef = useRef(null);
  const deliverablesRef = useRef(null);
  const pricingRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Trigger hero animation immediately
    setTimeout(() => {
      setSectionsVisible(prev => ({ ...prev, hero: true }));
    }, 100);
  }, [serviceId]);

  useEffect(() => {
    const observers = [];
    const refs = [
      { ref: benefitsRef, key: 'benefits' },
      { ref: processRef, key: 'process' },
      { ref: deliverablesRef, key: 'deliverables' },
      { ref: pricingRef, key: 'pricing' }
    ];

    refs.forEach(({ ref, key }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setSectionsVisible(prev => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.1, rootMargin: '50px' }
      );

      if (ref.current) {
        observer.observe(ref.current);
        observers.push({ observer, element: ref.current });
      }
    });

    return () => {
      observers.forEach(({ observer, element }) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const services = {
    'logo-design': {
      title: 'Logo Design',
      tagline: 'Your brand\'s first impression',
      description: 'A logo is more than just a pretty mark—it\'s the face of your business. We craft distinctive, memorable logos that capture your brand essence and make lasting impressions.',
      benefits: [
        'Unique and memorable design',
        'Multiple concept options',
        'Unlimited revisions',
        'Vector files for all uses',
        'Brand guidelines included',
        'Trademark-ready designs'
      ],
      process: [
        'Discovery & Research: Understanding your business, values, and target audience',
        'Concept Development: Creating multiple logo directions',
        'Refinement: Perfecting your chosen concept',
        'Delivery: All file formats and brand guidelines'
      ],
      pricing: 'Starting from $899',
      deliverables: [
        'Final logo in all formats (AI, EPS, PNG, JPG, SVG)',
        'Color variations (full color, black, white)',
        'Brand style guide',
        'Social media profile versions',
        'Favicon for website'
      ]
    },
    'brand-identity': {
      title: 'Brand Identity & Strategy',
      tagline: 'Build a brand that resonates',
      description: 'We create complete brand systems from strategy to visual identity. More than just a logo—we develop the entire personality of your brand that resonates with your audience and stands the test of time.',
      benefits: [
        'Comprehensive brand strategy',
        'Visual identity system',
        'Brand voice & messaging',
        'Competitive positioning',
        'Brand guidelines manual',
        'Long-term brand roadmap'
      ],
      process: [
        'Brand Strategy: Market research, competitor analysis, positioning',
        'Visual System: Logo, colors, typography, patterns',
        'Brand Applications: Business cards, letterhead, templates',
        'Brand Book: Comprehensive guidelines for consistent use'
      ],
      pricing: 'Starting from $2,499',
      deliverables: [
        'Complete brand strategy document',
        'Logo suite with variations',
        'Color palette and typography system',
        'Brand guidelines manual (30+ pages)',
        'Business card and stationery designs',
        'Social media templates'
      ]
    },
    'graphic-design': {
      title: 'Graphic Design',
      tagline: 'Professional design for every need',
      description: 'From marketing materials to digital assets, we provide professional design solutions for all your communication needs. Clean, impactful designs that get results.',
      benefits: [
        'Custom design for any medium',
        'Print and digital formats',
        'Fast turnaround times',
        'Unlimited revisions',
        'Print-ready files',
        'Ongoing design support'
      ],
      process: [
        'Brief: Understanding your design needs and objectives',
        'Concepts: Initial design directions',
        'Refinement: Perfecting the details',
        'Final Delivery: All formats ready to use'
      ],
      pricing: 'From $299 per project',
      deliverables: [
        'Brochures and flyers',
        'Business cards and stationery',
        'Social media graphics',
        'Presentation decks',
        'Email templates',
        'Print advertisements'
      ]
    },
    'web-development': {
      title: 'Website Design & Development',
      tagline: 'Fast, beautiful, conversion-focused',
      description: 'Modern, responsive websites built for growth. We combine stunning design with clean code to create websites that not only look amazing but drive real business results.',
      benefits: [
        'Mobile-first responsive design',
        'Lightning-fast performance',
        'SEO-optimized structure',
        'Easy content management',
        'Secure and scalable',
        '6 months support included'
      ],
      process: [
        'Planning: Site structure, features, and user experience',
        'Design: Custom designs aligned with your brand',
        'Development: Clean, modern code',
        'Launch: Testing, deployment, and training'
      ],
      pricing: 'Starting from $3,999',
      deliverables: [
        'Custom responsive website',
        'Content management system',
        'Contact forms and integrations',
        'Google Analytics setup',
        'SSL certificate and security',
        'Training and documentation'
      ]
    },
    'seo-performance': {
      title: 'SEO & Performance Optimization',
      tagline: 'Get found, load fast, convert better',
      description: 'Technical optimization to ensure your website ranks well on Google and loads lightning-fast. Better visibility means more customers.',
      benefits: [
        'Improved search rankings',
        'Faster page load times',
        'Better user experience',
        'Higher conversion rates',
        'Mobile optimization',
        'Ongoing monitoring'
      ],
      process: [
        'Audit: Comprehensive technical analysis',
        'Strategy: Prioritized optimization roadmap',
        'Implementation: Technical fixes and improvements',
        'Monitoring: Ongoing tracking and reporting'
      ],
      pricing: 'From $1,499/month',
      deliverables: [
        'Technical SEO audit',
        'On-page optimization',
        'Speed optimization',
        'Schema markup implementation',
        'Google Search Console setup',
        'Monthly performance reports'
      ]
    },
    'digital-solutions': {
      title: 'Digital & Creative Solutions',
      tagline: 'End-to-end digital excellence',
      description: 'Comprehensive digital solutions tailored to your business goals. From concept to execution, we handle everything your brand needs to succeed online.',
      benefits: [
        'Holistic digital strategy',
        'Multi-channel approach',
        'Custom solutions',
        'Expert team',
        'Scalable systems',
        'Data-driven decisions'
      ],
      process: [
        'Discovery: Understanding your business and goals',
        'Strategy: Creating a comprehensive digital roadmap',
        'Execution: Implementing across all channels',
        'Optimization: Continuous improvement based on data'
      ],
      pricing: 'Custom pricing',
      deliverables: [
        'Digital strategy document',
        'Website and web applications',
        'Marketing automation',
        'Email marketing campaigns',
        'Social media management',
        'Analytics and reporting'
      ]
    }
  };

  const service = services[serviceId];

  if (!service) {
    return (
      <div>
        <Header />
        <div style={{ padding: '120px 40px 80px', textAlign: 'center' }}>
          <h1>Service not found</h1>
          <button className="btn-primary" onClick={() => navigate('/')}>Go Home</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className={`scroll-reveal ${sectionsVisible.hero ? 'visible' : ''}`} style={{
        background: 'var(--bg-page)',
        padding: '140px 40px 80px',
        borderBottom: '1px solid var(--border-medium)'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <button 
            onClick={() => navigate('/')}
            className="fade-in"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              border: 'none',
              color: 'var(--brand-primary)',
              cursor: 'pointer',
              marginBottom: '40px',
              fontSize: '1rem',
              padding: '8px 0',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          
          <h1 className="heading-1 fade-in-up" style={{ marginBottom: '20px' }}>
            {service.title}
          </h1>
          <p className="body-large fade-in-up animate-delay-1" style={{ marginBottom: '40px', maxWidth: '800px' }}>
            {service.tagline}
          </p>
          <p className="body-medium fade-in-up animate-delay-2" style={{ maxWidth: '700px', lineHeight: '1.8' }}>
            {service.description}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className={`scroll-reveal ${sectionsVisible.benefits ? 'visible' : ''}`} style={{
        background: '#1e2827',
        padding: '80px 40px'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 className="heading-2" style={{ marginBottom: '40px' }}>What You Get</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {service.benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="scale-in"
                style={{
                  display: 'flex',
                  alignItems: 'start',
                  gap: '12px',
                  animationDelay: `${index * 0.1}s`,
                  opacity: sectionsVisible.benefits ? 1 : 0
                }}
              >
                <Check size={24} style={{ 
                  color: 'var(--brand-primary)', 
                  flexShrink: 0, 
                  marginTop: '2px',
                  transition: 'transform 0.3s ease'
                }} 
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className={`scroll-reveal ${sectionsVisible.process ? 'visible' : ''}`} style={{
        background: 'var(--bg-page)',
        padding: '80px 40px'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 className="heading-2" style={{ marginBottom: '40px' }}>Our Process</h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {service.process.map((step, index) => (
              <div 
                key={index} 
                className="card-hover-effect slide-in-left"
                style={{
                  background: 'var(--bg-card)',
                  padding: '32px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-medium)',
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'start',
                  animationDelay: `${index * 0.15}s`,
                  opacity: sectionsVisible.process ? 1 : 0
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: 'var(--brand-primary)',
                  minWidth: '60px',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section ref={deliverablesRef} className={`scroll-reveal ${sectionsVisible.deliverables ? 'visible' : ''}`} style={{
        background: '#1e2827',
        padding: '80px 40px'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 className="heading-2" style={{ marginBottom: '40px' }}>Deliverables</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {service.deliverables.map((item, index) => (
              <div 
                key={index} 
                className="card-hover-effect fade-in-up"
                style={{
                  background: 'var(--bg-card)',
                  padding: '20px 24px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-medium)',
                  animationDelay: `${index * 0.08}s`,
                  opacity: sectionsVisible.deliverables ? 1 : 0
                }}
              >
                <p className="body-small" style={{ color: 'var(--text-primary)' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA Section */}
      <section ref={pricingRef} className={`scroll-reveal ${sectionsVisible.pricing ? 'visible' : ''}`} style={{
        background: 'var(--bg-page)',
        padding: '80px 40px'
      }}>
        <div className="container" style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 className="heading-2 fade-in-up" style={{ marginBottom: '20px' }}>Investment</h2>
          <p className="body-large scale-in animate-delay-1" style={{ 
            marginBottom: '40px', 
            color: 'var(--brand-primary)',
            opacity: sectionsVisible.pricing ? 1 : 0
          }}>
            {service.pricing}
          </p>
          <p className="body-medium fade-in-up animate-delay-2" style={{ 
            marginBottom: '40px', 
            color: 'var(--text-secondary)',
            opacity: sectionsVisible.pricing ? 1 : 0
          }}>
            Every project is unique. Let's discuss your specific needs and create a custom solution that fits your goals and budget.
          </p>
          <button 
            className="btn-primary fade-in-up animate-delay-3" 
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              opacity: sectionsVisible.pricing ? 1 : 0
            }}
          >
            Start Your Project
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;

  const services = {
    'logo-design': {
      title: 'Logo Design',
      tagline: 'Your brand\'s first impression',
      description: 'A logo is more than just a pretty mark—it\'s the face of your business. We craft distinctive, memorable logos that capture your brand essence and make lasting impressions.',
      benefits: [
        'Unique and memorable design',
        'Multiple concept options',
        'Unlimited revisions',
        'Vector files for all uses',
        'Brand guidelines included',
        'Trademark-ready designs'
      ],
      process: [
        'Discovery & Research: Understanding your business, values, and target audience',
        'Concept Development: Creating multiple logo directions',
        'Refinement: Perfecting your chosen concept',
        'Delivery: All file formats and brand guidelines'
      ],
      pricing: 'Starting from $899',
      deliverables: [
        'Final logo in all formats (AI, EPS, PNG, JPG, SVG)',
        'Color variations (full color, black, white)',
        'Brand style guide',
        'Social media profile versions',
        'Favicon for website'
      ]
    },
    'brand-identity': {
      title: 'Brand Identity & Strategy',
      tagline: 'Build a brand that resonates',
      description: 'We create complete brand systems from strategy to visual identity. More than just a logo—we develop the entire personality of your brand that resonates with your audience and stands the test of time.',
      benefits: [
        'Comprehensive brand strategy',
        'Visual identity system',
        'Brand voice & messaging',
        'Competitive positioning',
        'Brand guidelines manual',
        'Long-term brand roadmap'
      ],
      process: [
        'Brand Strategy: Market research, competitor analysis, positioning',
        'Visual System: Logo, colors, typography, patterns',
        'Brand Applications: Business cards, letterhead, templates',
        'Brand Book: Comprehensive guidelines for consistent use'
      ],
      pricing: 'Starting from $2,499',
      deliverables: [
        'Complete brand strategy document',
        'Logo suite with variations',
        'Color palette and typography system',
        'Brand guidelines manual (30+ pages)',
        'Business card and stationery designs',
        'Social media templates'
      ]
    },
    'graphic-design': {
      title: 'Graphic Design',
      tagline: 'Professional design for every need',
      description: 'From marketing materials to digital assets, we provide professional design solutions for all your communication needs. Clean, impactful designs that get results.',
      benefits: [
        'Custom design for any medium',
        'Print and digital formats',
        'Fast turnaround times',
        'Unlimited revisions',
        'Print-ready files',
        'Ongoing design support'
      ],
      process: [
        'Brief: Understanding your design needs and objectives',
        'Concepts: Initial design directions',
        'Refinement: Perfecting the details',
        'Final Delivery: All formats ready to use'
      ],
      pricing: 'From $299 per project',
      deliverables: [
        'Brochures and flyers',
        'Business cards and stationery',
        'Social media graphics',
        'Presentation decks',
        'Email templates',
        'Print advertisements'
      ]
    },
    'web-development': {
      title: 'Website Design & Development',
      tagline: 'Fast, beautiful, conversion-focused',
      description: 'Modern, responsive websites built for growth. We combine stunning design with clean code to create websites that not only look amazing but drive real business results.',
      benefits: [
        'Mobile-first responsive design',
        'Lightning-fast performance',
        'SEO-optimized structure',
        'Easy content management',
        'Secure and scalable',
        '6 months support included'
      ],
      process: [
        'Planning: Site structure, features, and user experience',
        'Design: Custom designs aligned with your brand',
        'Development: Clean, modern code',
        'Launch: Testing, deployment, and training'
      ],
      pricing: 'Starting from $3,999',
      deliverables: [
        'Custom responsive website',
        'Content management system',
        'Contact forms and integrations',
        'Google Analytics setup',
        'SSL certificate and security',
        'Training and documentation'
      ]
    },
    'seo-performance': {
      title: 'SEO & Performance Optimization',
      tagline: 'Get found, load fast, convert better',
      description: 'Technical optimization to ensure your website ranks well on Google and loads lightning-fast. Better visibility means more customers.',
      benefits: [
        'Improved search rankings',
        'Faster page load times',
        'Better user experience',
        'Higher conversion rates',
        'Mobile optimization',
        'Ongoing monitoring'
      ],
      process: [
        'Audit: Comprehensive technical analysis',
        'Strategy: Prioritized optimization roadmap',
        'Implementation: Technical fixes and improvements',
        'Monitoring: Ongoing tracking and reporting'
      ],
      pricing: 'From $1,499/month',
      deliverables: [
        'Technical SEO audit',
        'On-page optimization',
        'Speed optimization',
        'Schema markup implementation',
        'Google Search Console setup',
        'Monthly performance reports'
      ]
    },
    'digital-solutions': {
      title: 'Digital & Creative Solutions',
      tagline: 'End-to-end digital excellence',
      description: 'Comprehensive digital solutions tailored to your business goals. From concept to execution, we handle everything your brand needs to succeed online.',
      benefits: [
        'Holistic digital strategy',
        'Multi-channel approach',
        'Custom solutions',
        'Expert team',
        'Scalable systems',
        'Data-driven decisions'
      ],
      process: [
        'Discovery: Understanding your business and goals',
        'Strategy: Creating a comprehensive digital roadmap',
        'Execution: Implementing across all channels',
        'Optimization: Continuous improvement based on data'
      ],
      pricing: 'Custom pricing',
      deliverables: [
        'Digital strategy document',
        'Website and web applications',
        'Marketing automation',
        'Email marketing campaigns',
        'Social media management',
        'Analytics and reporting'
      ]
    }
  };

  const service = services[serviceId];

  if (!service) {
    return (
      <div>
        <Header />
        <div style={{ padding: '120px 40px 80px', textAlign: 'center' }}>
          <h1>Service not found</h1>
          <button className="btn-primary" onClick={() => navigate('/')}>Go Home</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="fade-in" style={{
        background: 'var(--bg-page)',
        padding: '140px 40px 80px',
        borderBottom: '1px solid var(--border-medium)'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <button 
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              border: 'none',
              color: 'var(--brand-primary)',
              cursor: 'pointer',
              marginBottom: '40px',
              fontSize: '1rem',
              padding: '8px 0',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          
          <h1 className="heading-1" style={{ marginBottom: '20px' }}>
            {service.title}
          </h1>
          <p className="body-large" style={{ marginBottom: '40px', maxWidth: '800px' }}>
            {service.tagline}
          </p>
          <p className="body-medium" style={{ maxWidth: '700px', lineHeight: '1.8' }}>
            {service.description}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{
        background: '#1e2827',
        padding: '80px 40px'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 className="heading-2" style={{ marginBottom: '40px' }}>What You Get</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {service.benefits.map((benefit, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'start',
                gap: '12px'
              }}>
                <Check size={24} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: '2px' }} />
                <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{
        background: 'var(--bg-page)',
        padding: '80px 40px'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 className="heading-2" style={{ marginBottom: '40px' }}>Our Process</h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {service.process.map((step, index) => (
              <div key={index} style={{
                background: 'var(--bg-card)',
                padding: '32px',
                borderRadius: '8px',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                gap: '24px',
                alignItems: 'start'
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: 'var(--brand-primary)',
                  minWidth: '60px'
                }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section style={{
        background: '#1e2827',
        padding: '80px 40px'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 className="heading-2" style={{ marginBottom: '40px' }}>Deliverables</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {service.deliverables.map((item, index) => (
              <div key={index} style={{
                background: 'var(--bg-card)',
                padding: '20px 24px',
                borderRadius: '8px',
                border: '1px solid var(--border-medium)'
              }}>
                <p className="body-small" style={{ color: 'var(--text-primary)' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA Section */}
      <section style={{
        background: 'var(--bg-page)',
        padding: '80px 40px'
      }}>
        <div className="container" style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 className="heading-2" style={{ marginBottom: '20px' }}>Investment</h2>
          <p className="body-large" style={{ marginBottom: '40px', color: 'var(--brand-primary)' }}>
            {service.pricing}
          </p>
          <p className="body-medium" style={{ marginBottom: '40px', color: 'var(--text-secondary)' }}>
            Every project is unique. Let's discuss your specific needs and create a custom solution that fits your goals and budget.
          </p>
          <button 
            className="btn-primary" 
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            Start Your Project
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;