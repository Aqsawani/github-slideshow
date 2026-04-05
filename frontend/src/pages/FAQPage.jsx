import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronDown, ArrowRight } from 'lucide-react';

const faqData = [
  {
    category: 'Services',
    questions: [
      { q: 'What services does OZlume offer?', a: 'We offer a complete range of creative and digital services including logo design, brand identity & strategy, graphic design, website design & development, Shopify store setup, SEO & performance optimization, and full digital solutions. Every service is tailored to your specific business needs.' },
      { q: 'Do you work with businesses outside Melbourne?', a: 'Yes! While we are based in Melbourne, we work with clients across Australia and internationally. All our communication and project management is handled digitally, making remote collaboration seamless.' },
      { q: 'Can you build Shopify stores?', a: 'Absolutely. We specialize in Shopify store development for Australian ecommerce businesses. We create custom, conversion-optimized online stores that are designed to drive sales and grow with your business.' },
      { q: 'Do you offer ongoing support after a project is completed?', a: 'Yes, we provide 6 months of support after project completion for web development projects. For other services, we are always available for additional work and updates as your brand evolves.' }
    ]
  },
  {
    category: 'Pricing',
    questions: [
      { q: 'How much do your services cost?', a: 'Every project is unique, so we provide custom quotes based on your specific requirements. We offer competitive pricing for all business sizes. Contact us for a free consultation and we will provide a detailed quote tailored to your needs.' },
      { q: 'Do you require a deposit before starting work?', a: 'Yes, we typically require a 50% deposit to begin work, with the remaining balance due upon project completion. This helps us allocate dedicated resources to your project from day one.' },
      { q: 'Are there any hidden costs?', a: 'No. We believe in transparent pricing. Your quote will include everything discussed in the project scope. If additional work is needed beyond the original scope, we will discuss it with you and provide a revised quote before proceeding.' }
    ]
  },
  {
    category: 'Process',
    questions: [
      { q: 'What is your design process?', a: 'Our process follows four stages: (1) Discovery — we learn about your business, goals, and audience. (2) Design — we create concepts and visual directions. (3) Build — we develop and refine the final product. (4) Deliver — we hand over all files with comprehensive guidelines and support.' },
      { q: 'How do you start a new project?', a: 'It starts with a free consultation where we discuss your goals, timeline, and budget. From there, we create a proposal outlining the scope, deliverables, and timeline. Once approved, we begin with the discovery phase.' },
      { q: 'Will I be involved in the design process?', a: 'Absolutely. We believe in collaborative design. You will be involved at every key milestone — from initial concepts to final revisions. Your feedback drives the direction of the project.' }
    ]
  },
  {
    category: 'Timelines',
    questions: [
      { q: 'How long does a logo design take?', a: 'A typical logo design project takes 1-2 weeks from initial concepts to final delivery. This includes time for feedback rounds and revisions.' },
      { q: 'How long does a website project take?', a: 'Website projects typically take 3-6 weeks depending on complexity. A simple brochure site may take 3 weeks, while a full ecommerce Shopify store could take 4-6 weeks.' },
      { q: 'Can you work with tight deadlines?', a: 'Yes, we can accommodate rush projects when possible. Let us know your timeline during the initial consultation and we will do our best to meet your deadline. Rush projects may incur an additional fee.' }
    ]
  },
  {
    category: 'Revisions',
    questions: [
      { q: 'How many revisions are included?', a: 'For logo design, we include unlimited revisions until you are completely satisfied. For other projects, the number of revision rounds is outlined in your project proposal — typically 2-3 rounds of revisions are included.' },
      { q: 'What happens if I want changes after the project is delivered?', a: 'We are always happy to make additional changes after delivery. Minor tweaks are often included in our post-delivery support period. For larger changes, we will provide a fair quote for the additional work.' },
      { q: 'What if I am not happy with the initial concepts?', a: 'That rarely happens, but if it does, we will go back to the drawing board. We work closely with you during the discovery phase to ensure we understand your vision. If the first round of concepts misses the mark, we will create new directions based on your feedback at no extra cost.' }
    ]
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-testid="faq-item"
      style={{
        border: '1px solid rgba(0, 163, 168, 0.15)',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease',
        borderColor: isOpen ? 'rgba(0, 163, 168, 0.4)' : 'rgba(0, 163, 168, 0.15)'
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '20px 24px',
          background: isOpen ? 'rgba(0, 163, 168, 0.05)' : 'transparent',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          cursor: 'pointer',
          transition: 'background 0.3s ease'
        }}
      >
        <span style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: '600', textAlign: 'left' }}>{question}</span>
        <ChevronDown
          size={20}
          style={{
            color: 'var(--brand-primary)',
            flexShrink: 0,
            transition: 'transform 0.3s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        />
      </button>
      <div style={{
        maxHeight: isOpen ? '300px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease',
        padding: isOpen ? '0 24px 20px' : '0 24px'
      }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>{answer}</p>
      </div>
    </div>
  );
};

const FAQPage = () => {
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <Header />

      {/* Hero */}
      <section data-testid="faq-hero" style={{
        paddingTop: '160px', paddingBottom: '60px',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(180deg, rgba(10,11,10,0.93) 0%, rgba(26,29,27,0.96) 100%), url("https://images.unsplash.com/photo-1771964427768-1f8ae7794358?w=1920&q=50&auto=format")`,
          backgroundSize: 'cover', backgroundPosition: 'center', pointerEvents: 'none'
        }} />
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              display: 'inline-block', padding: '8px 20px',
              background: 'rgba(0, 163, 168, 0.1)', border: '1px solid rgba(0, 163, 168, 0.3)',
              borderRadius: '50px', marginBottom: '24px'
            }}>
              <span style={{ color: 'var(--brand-primary)', fontSize: '0.9rem', fontWeight: '500' }}>Help Center</span>
            </div>
            <h1 data-testid="faq-page-title" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800',
              color: '#FFFFFF', marginBottom: '24px', lineHeight: '1.1'
            }}>
              Frequently Asked Questions
            </h1>
            <p style={{
              fontSize: '1.25rem', color: 'var(--text-secondary)',
              maxWidth: '600px', margin: '0 auto', lineHeight: '1.6'
            }}>
              Find answers to common questions about our services, process, and pricing.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section style={{ padding: '60px 40px 100px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {faqData.map((section, sIndex) => (
            <div key={sIndex} style={{ marginBottom: '48px' }}>
              <h2 data-testid={`faq-category-${section.category.toLowerCase()}`} style={{
                fontSize: '1.25rem', fontWeight: '700', color: 'var(--brand-primary)',
                marginBottom: '20px', paddingBottom: '12px',
                borderBottom: '1px solid rgba(0, 163, 168, 0.2)'
              }}>
                {section.category}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {section.questions.map((item, qIndex) => (
                  <FAQItem key={qIndex} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 40px', background: 'var(--bg-card)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '700', color: '#FFFFFF', marginBottom: '16px' }}>
          Still have questions?
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '30px', maxWidth: '500px', margin: '0 auto 30px' }}>
          We're here to help. Reach out and we'll get back to you within 24 hours.
        </p>
        <button className="btn-primary" data-testid="faq-contact-btn"
          onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1.05rem', padding: '1.2em 2.5em' }}>
          Contact Us <ArrowRight size={20} />
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
