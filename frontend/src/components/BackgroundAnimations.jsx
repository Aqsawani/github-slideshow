import React from 'react';

const BackgroundAnimations = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      {/* Teal ring - top right */}
      <svg style={{
        position: 'absolute', top: '6%', right: '8%',
        width: '120px', height: '120px',
        animation: 'bgFloat1 20s ease-in-out infinite',
        willChange: 'transform', opacity: 0.12
      }}>
        <circle cx="60" cy="60" r="50" stroke="#00A3A8" strokeWidth="1.5" fill="none" />
      </svg>

      {/* Hollow triangle - left */}
      <svg style={{
        position: 'absolute', top: '22%', left: '5%',
        width: '80px', height: '80px',
        animation: 'bgFloat2 24s ease-in-out infinite',
        willChange: 'transform', opacity: 0.1
      }}>
        <polygon points="40,8 74,68 6,68" stroke="#00A3A8" strokeWidth="1.2" fill="none" />
      </svg>

      {/* Pen nib / design tool */}
      <svg style={{
        position: 'absolute', top: '38%', right: '14%',
        width: '50px', height: '50px',
        animation: 'bgFloat3 18s ease-in-out infinite',
        willChange: 'transform', opacity: 0.13
      }} viewBox="0 0 24 24" fill="none" stroke="#00A3A8" strokeWidth="1.2" strokeLinecap="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>

      {/* Rounded square - mid left */}
      <svg style={{
        position: 'absolute', top: '55%', left: '10%',
        width: '65px', height: '65px',
        animation: 'bgSpin 35s linear infinite',
        willChange: 'transform', opacity: 0.1
      }}>
        <rect x="8" y="8" width="49" height="49" rx="12" stroke="#00A3A8" strokeWidth="1.2" fill="none" />
      </svg>

      {/* Cross / plus - right mid */}
      <svg style={{
        position: 'absolute', top: '65%', right: '6%',
        width: '40px', height: '40px',
        animation: 'bgFloat1 22s ease-in-out infinite reverse',
        willChange: 'transform', opacity: 0.12
      }}>
        <line x1="20" y1="6" x2="20" y2="34" stroke="#00A3A8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="6" y1="20" x2="34" y2="20" stroke="#00A3A8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* Diamond - bottom left */}
      <svg style={{
        position: 'absolute', bottom: '18%', left: '18%',
        width: '55px', height: '55px',
        animation: 'bgFloat3 26s ease-in-out infinite',
        willChange: 'transform', opacity: 0.11
      }}>
        <polygon points="27.5,4 51,27.5 27.5,51 4,27.5" stroke="#00A3A8" strokeWidth="1.2" fill="none" />
      </svg>

      {/* Bezier / design curve - top center */}
      <svg style={{
        position: 'absolute', top: '12%', left: '42%',
        width: '100px', height: '60px',
        animation: 'bgFloat2 28s ease-in-out infinite',
        willChange: 'transform', opacity: 0.1
      }} viewBox="0 0 100 60" fill="none">
        <path d="M5 50 C25 5, 75 5, 95 50" stroke="#00A3A8" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="5" cy="50" r="3" fill="#00A3A8" opacity="0.5" />
        <circle cx="95" cy="50" r="3" fill="#00A3A8" opacity="0.5" />
      </svg>

      {/* Small dots cluster - bottom right */}
      <svg style={{
        position: 'absolute', bottom: '10%', right: '20%',
        width: '80px', height: '80px',
        animation: 'bgFloat1 16s ease-in-out infinite',
        willChange: 'transform', opacity: 0.14
      }}>
        <circle cx="20" cy="20" r="2.5" fill="#00A3A8" />
        <circle cx="45" cy="15" r="2" fill="#00A3A8" />
        <circle cx="60" cy="35" r="2.5" fill="#00A3A8" />
        <circle cx="30" cy="50" r="2" fill="#00A3A8" />
        <circle cx="55" cy="60" r="1.5" fill="#00A3A8" />
      </svg>

      {/* Hexagon - left mid-bottom */}
      <svg style={{
        position: 'absolute', top: '75%', left: '3%',
        width: '70px', height: '70px',
        animation: 'bgSpin 40s linear infinite reverse',
        willChange: 'transform', opacity: 0.09
      }}>
        <polygon points="35,5 62,17.5 62,52.5 35,65 8,52.5 8,17.5" stroke="#00A3A8" strokeWidth="1.2" fill="none" />
      </svg>

      {/* Soft glow orb - center */}
      <div style={{
        position: 'absolute', top: '45%', left: '50%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(0,163,168,0.04) 0%, transparent 65%)',
        borderRadius: '50%',
        animation: 'bgDrift 30s linear infinite',
        willChange: 'transform',
        transform: 'translate(-50%, -50%)'
      }} />

      <style>{`
        @keyframes bgFloat1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-15px, 18px); }
          50% { transform: translate(10px, -12px); }
          75% { transform: translate(-8px, -20px); }
        }
        @keyframes bgFloat2 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(20px, -16px); }
          66% { transform: translate(-12px, 22px); }
        }
        @keyframes bgFloat3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(18px, -14px) rotate(15deg); }
        }
        @keyframes bgSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bgDrift {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-48%, -52%) scale(1.08); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
        @media (max-width: 767px) {
          [aria-hidden="true"] svg { transform: scale(0.7); }
        }
      `}</style>
    </div>
  );
};

export default BackgroundAnimations;
