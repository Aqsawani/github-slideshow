import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const ClientLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.info("Client portal coming soon. Contact us for project updates.");
  };

  const inputStyle = {
    width: '100%', padding: '16px 16px 16px 48px',
    background: 'var(--bg-elevated)', border: '1px solid var(--border-medium)',
    borderRadius: '10px', color: '#FFFFFF', fontSize: '1rem',
    fontFamily: 'Inter, Arial, sans-serif', transition: 'border-color 0.3s ease'
  };

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <Header />

      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '160px 40px 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(180deg, rgba(10,11,10,0.92) 0%, rgba(26,29,27,0.96) 100%), url("https://images.unsplash.com/photo-1771270759486-1f7703945072?w=1920&q=50&auto=format")`,
          backgroundSize: 'cover', backgroundPosition: 'center', pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '440px' }}>
          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '16px',
              background: 'rgba(0, 163, 168, 0.1)', border: '1px solid rgba(0, 163, 168, 0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <Lock size={28} color="var(--brand-primary)" />
            </div>
            <h1 data-testid="client-login-title" style={{
              fontSize: '1.75rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px'
            }}>
              Client Login
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Access your project dashboard and files
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} data-testid="client-login-form" style={{
            padding: '36px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div style={{ position: 'relative' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '600' }}>Email</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com" data-testid="login-email"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                />
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '600' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password" data-testid="login-password"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                />
              </div>
            </div>

            <button type="submit" className="btn-primary" data-testid="login-submit-btn"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '8px', width: '100%', marginTop: '8px'
              }}>
              Sign In <ArrowRight size={18} />
            </button>

            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
              Don't have access? <a onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }} style={{ color: 'var(--brand-primary)', cursor: 'pointer', textDecoration: 'none' }}>Contact us</a>
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientLoginPage;
