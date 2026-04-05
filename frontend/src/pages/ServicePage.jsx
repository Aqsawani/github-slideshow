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
      title: 'Professional Logo Design Australia',
      tagline: 'Create a Memorable Brand Identity for Your Australian Business',
      description: 'Looking for professional logo design in Australia? OZlume creates distinctive, memorable logos that capture your brand essence. Our Melbourne-based designers craft custom logos for businesses across Sydney, Brisbane, Perth, and all of Australia. Stand out from competitors with a unique brand mark.',
      benefits: [
        'Custom Australian logo design',
        'Multiple concept options',
        'Unlimited revisions included',
        'Vector files for all uses',
        'Brand guidelines included',
        'Trademark-ready designs'
      ],
      process: [
        'Discovery & Research: Understanding your Australian business, values, and target audience',
        'Concept Development: Creating multiple unique logo directions',
        'Refinement: Perfecting your chosen concept with your feedback',
        'Delivery: All file formats and comprehensive brand guidelines'
      ],
      pricing: 'Message Us for a Custom Offer',
      deliverables: [
        'Final logo in all formats (AI, EPS, PNG, JPG, SVG)',
        'Color variations (full color, black, white)',
        'Brand style guide',
        'Social media profile versions',
        'Favicon for website'
      ]
    },
    'brand-identity': {
      title: 'Brand Identity Design Melbourne & Sydney',
      tagline: 'Complete Brand Strategy for Australian Businesses',
      description: 'Transform your business with comprehensive brand identity design from OZlume. We create complete brand systems from strategy to visual identity for businesses across Melbourne, Sydney, and Australia. More than just a logo—we develop your entire brand personality that resonates with Australian audiences.',
      benefits: [
        'Comprehensive brand strategy',
        'Complete visual identity system',
        'Brand voice & messaging',
        'Competitive market positioning',
        'Professional brand guidelines manual',
        'Logo design included'
      ],
      process: [
        'Brand Strategy: Australian market research, competitor analysis, positioning',
        'Visual System: Logo, colors, typography, patterns tailored for your market',
        'Brand Applications: Business cards, letterhead, templates',
        'Brand Book: Comprehensive guidelines for consistent brand use'
      ],
      pricing: 'Message Us for a Custom Offer',
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
      title: 'Graphic Design Services Melbourne',
      tagline: 'Professional Design Solutions for Australian Businesses',
      description: 'Need professional graphic design in Melbourne or Sydney? OZlume provides expert design solutions for marketing materials, digital assets, and print collateral. Our Australian designers deliver clean, impactful designs that drive results for your business.',
      benefits: [
        'Custom design for any medium',
        'Print and digital formats',
        'Fast turnaround times',
        'Unlimited revisions',
        'Print-ready files',
        'Ongoing design support'
      ],
      process: [
        'Brief: Understanding your design needs and business objectives',
        'Concepts: Initial design directions tailored to your brand',
        'Refinement: Perfecting every detail',
        'Final Delivery: All formats ready for print and digital use'
      ],
      pricing: 'Message Us for a Custom Offer',
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
      title: 'Web Design Sydney & Melbourne | Shopify Development',
      tagline: 'Custom Websites & Shopify Stores for Australian Businesses',
      description: 'Looking for web design in Sydney or Melbourne? OZlume builds modern, responsive websites and Shopify stores that drive growth for Australian businesses. We combine stunning design with clean code for websites that look amazing and convert visitors into customers. Expert Shopify store development Australia.',
      benefits: [
        'Mobile-first responsive design',
        'Lightning-fast performance',
        'SEO-optimized structure',
        'Easy content management',
        'Shopify & ecommerce expertise',
        '6 months support included'
      ],
      process: [
        'Planning: Site structure, features, and user experience strategy',
        'Design: Custom designs aligned with your Australian brand',
        'Development: Clean, modern code built for performance',
        'Launch: Testing, deployment, and training for your team'
      ],
      pricing: 'Message Us for a Custom Offer',
      deliverables: [
        'Custom responsive website or Shopify store',
        'Content management system',
        'Contact forms and integrations',
        'Google Analytics setup',
        'SSL certificate and security',
        'Training and documentation'
      ]
    },
    'seo-performance': {
      title: 'SEO Services Australia | Search Engine Optimization',
      tagline: 'Rank Higher on Google Across Australia',
      description: 'Boost your Google rankings with OZlume\'s SEO services Australia. Our technical optimization ensures your website ranks well for Australian searches and loads lightning-fast. Serving businesses in Sydney, Melbourne, Brisbane, Perth, and nationwide. Better visibility means more Australian customers.',
      benefits: [
        'Improved Google rankings',
        'Faster page load times',
        'Better user experience',
        'Higher conversion rates',
        'Mobile optimization',
        'Ongoing monitoring & reporting'
      ],
      process: [
        'Audit: Comprehensive technical SEO analysis',
        'Strategy: Prioritized optimization roadmap for Australian market',
        'Implementation: Technical fixes and content improvements',
        'Monitoring: Ongoing tracking and monthly reporting'
      ],
      pricing: 'Message Us for a Custom Offer',
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
      title: 'Digital Agency Australia | Full-Service Solutions',
      tagline: 'End-to-End Digital Excellence for Australian Businesses',
      description: 'OZlume is your full-service digital agency in Australia. From web development to digital marketing, we handle everything your brand needs to succeed online. Serving businesses across Melbourne, Sydney, Brisbane, Perth, and all of Australia with comprehensive digital solutions.',
      benefits: [
        'Holistic digital strategy',
        'Multi-channel approach',
        'Custom Australian solutions',
        'Expert local team',
        'Scalable systems',
        'Data-driven decisions'
      ],
      process: [
        'Discovery: Understanding your Australian business and goals',
        'Strategy: Creating a comprehensive digital roadmap',
        'Execution: Implementing across all digital channels',
        'Optimization: Continuous improvement based on data'
      ],
      pricing: 'Message Us for a Custom Offer',
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
        background: 'var(--gradient-dark)',
        padding: '140px 40px 80px',
        borderBottom: '1px solid var(--border-medium)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated background orbs */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 163, 168, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'float 20s ease-in-out infinite',
          pointerEvents: 'none'
        }} />
        
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
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
          
          {/* Service badge */}
          <div className="fade-in" style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'rgba(0, 163, 168, 0.1)',
            border: '1px solid rgba(0, 163, 168, 0.3)',
            borderRadius: '50px',
            marginBottom: '24px',
            fontSize: '0.85rem',
            color: 'var(--brand-primary)',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Our Service
          </div>
          
          <h1 className="heading-1 fade-in-up" style={{ 
            marginBottom: '20px',
            color: '#FFFFFF'
          }}>
            {service.title}
          </h1>
          <p className="body-large fade-in-up animate-delay-1" style={{ 
            marginBottom: '40px', 
            maxWidth: '800px',
            fontSize: '1.35rem'
          }}>
            {service.tagline}
          </p>
          <p className="body-medium fade-in-up animate-delay-2" style={{ 
            maxWidth: '700px', 
            lineHeight: '1.8',
            color: 'var(--text-secondary)'
          }}>
            {service.description}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className={`scroll-reveal ${sectionsVisible.benefits ? 'visible' : ''}`} style={{
        background: 'var(--bg-page)',
        padding: '80px 40px',
        position: 'relative'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'rgba(0, 163, 168, 0.1)',
            border: '1px solid rgba(0, 163, 168, 0.3)',
            borderRadius: '50px',
            marginBottom: '32px',
            fontSize: '0.85rem',
            color: 'var(--brand-primary)',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Benefits
          </div>
          <h2 className="heading-2" style={{ marginBottom: '40px' }}>What You Get</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {service.benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="scale-in glass-effect"
                style={{
                  display: 'flex',
                  alignItems: 'start',
                  gap: '12px',
                  padding: '24px',
                  borderRadius: '12px',
                  animationDelay: `${index * 0.1}s`,
                  opacity: sectionsVisible.benefits ? 1 : 0,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 163, 168, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
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
        background: 'var(--gradient-dark)',
        padding: '80px 40px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0, 163, 168, 0.1) 0%, transparent 70%)',
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
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'rgba(0, 163, 168, 0.1)',
            border: '1px solid rgba(0, 163, 168, 0.3)',
            borderRadius: '50px',
            marginBottom: '32px',
            fontSize: '0.85rem',
            color: 'var(--brand-primary)',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Process
          </div>
          <h2 className="heading-2" style={{ marginBottom: '40px' }}>Our Process</h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {service.process.map((step, index) => (
              <div 
                key={index} 
                className="card-hover-effect slide-in-left glass-effect"
                style={{
                  padding: '32px',
                  borderRadius: '16px',
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'start',
                  animationDelay: `${index * 0.15}s`,
                  opacity: sectionsVisible.process ? 1 : 0,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative gradient */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(0, 163, 168, 0.15) 0%, transparent 70%)',
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }} />
                
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  background: 'linear-gradient(135deg, #00A3A8 0%, #00d4db 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  minWidth: '70px',
                  transition: 'transform 0.3s ease',
                  position: 'relative',
                  zIndex: 1
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="body-medium" style={{ 
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section ref={deliverablesRef} className={`scroll-reveal ${sectionsVisible.deliverables ? 'visible' : ''}`} style={{
        background: 'var(--bg-page)',
        padding: '80px 40px'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'rgba(0, 163, 168, 0.1)',
            border: '1px solid rgba(0, 163, 168, 0.3)',
            borderRadius: '50px',
            marginBottom: '32px',
            fontSize: '0.85rem',
            color: 'var(--brand-primary)',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Deliverables
          </div>
          <h2 className="heading-2" style={{ marginBottom: '40px' }}>What You'll Receive</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {service.deliverables.map((item, index) => (
              <div 
                key={index} 
                className="card-hover-effect fade-in-up glass-effect"
                style={{
                  padding: '24px',
                  borderRadius: '12px',
                  animationDelay: `${index * 0.08}s`,
                  opacity: sectionsVisible.deliverables ? 1 : 0,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <p className="body-small" style={{ 
                  color: 'var(--text-primary)',
                  fontWeight: '500'
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA Section */}
      <section ref={pricingRef} className={`scroll-reveal ${sectionsVisible.pricing ? 'visible' : ''}`} style={{
        background: 'var(--gradient-dark)',
        padding: '100px 40px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Centered glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0, 163, 168, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }} />
        
        <div className="container" style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'rgba(0, 163, 168, 0.1)',
            border: '1px solid rgba(0, 163, 168, 0.3)',
            borderRadius: '50px',
            marginBottom: '32px',
            fontSize: '0.85rem',
            color: 'var(--brand-primary)',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Investment
          </div>
          <h2 className="heading-2 fade-in-up" style={{ marginBottom: '20px' }}>Ready to Get Started?</h2>
          <p className="body-large scale-in animate-delay-1" style={{ 
            marginBottom: '24px', 
            color: 'var(--brand-primary)',
            opacity: sectionsVisible.pricing ? 1 : 0,
            fontSize: '1.8rem',
            fontWeight: '700'
          }}>
            Get Your Free Quote Today
          </p>
          <p className="body-medium fade-in-up animate-delay-2" style={{ 
            marginBottom: '48px', 
            color: 'var(--text-secondary)',
            opacity: sectionsVisible.pricing ? 1 : 0,
            maxWidth: '600px',
            margin: '0 auto 48px'
          }}>
            Every project is unique. Message us today for a free consultation and custom quote tailored to your business needs.
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
              opacity: sectionsVisible.pricing ? 1 : 0,
              fontSize: '1.05rem',
              padding: '1.2em 2.5em'
            }}
          >
            Get Free Quote
            <ArrowRight size={20} />
          </button>
          
          {/* Trust Signal */}
          <p className="fade-in-up animate-delay-4" style={{
            marginTop: '24px',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            opacity: sectionsVisible.pricing ? 1 : 0
          }}>
            ✓ 120+ Happy Clients &nbsp;|&nbsp; ✓ 150+ Projects Delivered &nbsp;|&nbsp; ✓ 5 Years Experience
          </p>
        </div>
      </section>

      <Footer />
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }
      `}</style>
    </div>
  );
};

export default ServicePage;
