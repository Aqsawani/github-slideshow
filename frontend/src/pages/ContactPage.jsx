import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', email: '', whatsapp: '', company: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.whatsapp || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Message Sent! We'll get back to you within 24 hours.");
        setFormData({ name: '', email: '', whatsapp: '', company: '', message: '' });
      } else {
        toast.error(data.detail || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%', padding: '16px',
    background: 'var(--bg-elevated)', border: '1px solid var(--border-medium)',
    borderRadius: '10px', color: '#FFFFFF', fontSize: '1rem',
    fontFamily: 'Inter, Arial, sans-serif', transition: 'border-color 0.3s ease'
  };

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <Header />

      {/* Hero */}
      <section data-testid="contact-hero" style={{
        paddingTop: '160px', paddingBottom: '60px',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(180deg, rgba(10,11,10,0.9) 0%, rgba(26,29,27,0.95) 100%), url("https://images.unsplash.com/photo-1770885653473-ca48b4d69173?w=1920&q=50&auto=format")`,
          backgroundSize: 'cover', backgroundPosition: 'center', pointerEvents: 'none'
        }} />
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              display: 'inline-block', padding: '8px 20px',
              background: 'rgba(0, 163, 168, 0.1)', border: '1px solid rgba(0, 163, 168, 0.3)',
              borderRadius: '50px', marginBottom: '24px'
            }}>
              <span style={{ color: 'var(--brand-primary)', fontSize: '0.9rem', fontWeight: '500' }}>Get in Touch</span>
            </div>
            <h1 data-testid="contact-page-title" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800',
              color: '#FFFFFF', marginBottom: '24px', lineHeight: '1.1'
            }}>
              Contact Us
            </h1>
            <p style={{
              fontSize: '1.25rem', color: 'var(--text-secondary)',
              maxWidth: '600px', margin: '0 auto', lineHeight: '1.6'
            }}>
              Ready to start your project? Get in touch for a free consultation and custom quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section id="contact" style={{ padding: '60px 40px 100px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '60px'
          }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '32px' }}>
                Let's Talk
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'rgba(0, 163, 168, 0.1)', border: '1px solid rgba(0, 163, 168, 0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Mail size={20} color="var(--brand-primary)" />
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '4px' }}>Email</p>
                    <a href="mailto:contact@ozlume.com.au" data-testid="contact-page-email" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '1rem' }}>contact@ozlume.com.au</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'rgba(0, 163, 168, 0.1)', border: '1px solid rgba(0, 163, 168, 0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Phone size={20} color="var(--brand-primary)" />
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '4px' }}>WhatsApp</p>
                    <a href="https://wa.me/61452039863" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '1rem' }}>0452 039 863</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'rgba(0, 163, 168, 0.1)', border: '1px solid rgba(0, 163, 168, 0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MapPin size={20} color="var(--brand-primary)" />
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '4px' }}>Location</p>
                    <p style={{ color: '#FFFFFF', fontSize: '1rem', margin: 0 }}>Melbourne, Australia</p>
                  </div>
                </div>
              </div>

              <div style={{
                padding: '24px',
                background: 'rgba(0, 163, 168, 0.05)',
                border: '1px solid rgba(0, 163, 168, 0.15)',
                borderRadius: '16px'
              }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  We typically respond within 24 hours. For urgent inquiries, reach out via WhatsApp for a faster response.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} data-testid="contact-page-form" style={{
              display: 'flex', flexDirection: 'column', gap: '20px',
              padding: '40px', background: 'var(--bg-card)',
              border: '1px solid var(--border-medium)', borderRadius: '20px'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '600' }}>Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required data-testid="cp-name" style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '600' }}>Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required data-testid="cp-email" style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '600' }}>WhatsApp *</label>
                  <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required placeholder="+61 XXX XXX XXX" data-testid="cp-whatsapp" style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '600' }}>Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} data-testid="cp-company" style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '600' }}>Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" data-testid="cp-message"
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'} />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-primary" data-testid="cp-submit"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: '8px', width: '100%', marginTop: '8px',
                  opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}>
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 767px) {
          [data-testid="contact-hero"] + section > div > div {
            grid-template-columns: 1fr !important;
          }
          form > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
