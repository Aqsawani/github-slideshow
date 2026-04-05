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
      {/* Soft glow orb - center */}
      <div style={{
        position: 'absolute', top: '45%', left: '50%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(0,163,168,0.04) 0%, transparent 65%)',
        borderRadius: '50%',
        animation: 'bgDrift 12s linear infinite',
        willChange: 'transform',
        transform: 'translate(-50%, -50%)'
      }} />

      {/* Top right orb */}
      <div style={{
        position: 'absolute', top: '8%', right: '12%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(0,163,168,0.04) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'bgFloat1 10s ease-in-out infinite',
        willChange: 'transform'
      }} />

      {/* Bottom left orb */}
      <div style={{
        position: 'absolute', bottom: '15%', left: '8%',
        width: '250px', height: '250px',
        background: 'radial-gradient(circle, rgba(0,163,168,0.035) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'bgFloat2 8s ease-in-out infinite',
        willChange: 'transform'
      }} />

      <style>{`
        @keyframes bgFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 20px) scale(1.05); }
          66% { transform: translate(15px, -15px) scale(0.97); }
        }
        @keyframes bgFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(25px, -20px) scale(1.04); }
        }
        @keyframes bgDrift {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-48%, -52%) scale(1.08); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default BackgroundAnimations;
