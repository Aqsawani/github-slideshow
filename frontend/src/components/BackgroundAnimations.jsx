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
      {/* Floating orb 1 - top right */}
      <div style={{
        position: 'absolute',
        top: '8%',
        right: '12%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(0,163,168,0.04) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'bgFloat1 22s ease-in-out infinite',
        willChange: 'transform'
      }} />

      {/* Floating orb 2 - bottom left */}
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '8%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(0,163,168,0.035) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'bgFloat2 18s ease-in-out infinite',
        willChange: 'transform'
      }} />

      {/* Gradient sweep */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(ellipse, rgba(0,163,168,0.02) 0%, transparent 60%)',
        borderRadius: '50%',
        animation: 'bgDrift 30s linear infinite',
        willChange: 'transform',
        transform: 'translate(-50%, -50%)'
      }} />

      {/* Tiny dots */}
      {[...Array(6)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: `${15 + i * 14}%`,
          left: `${10 + (i % 3) * 35}%`,
          width: '3px',
          height: '3px',
          background: 'rgba(0,163,168,0.12)',
          borderRadius: '50%',
          animation: `bgPulse ${3 + i * 0.8}s ease-in-out infinite`,
          animationDelay: `${i * 0.6}s`
        }} />
      ))}

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
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes bgPulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.8); }
        }
      `}</style>
    </div>
  );
};

export default BackgroundAnimations;
