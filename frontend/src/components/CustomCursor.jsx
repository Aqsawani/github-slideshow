import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const animate = () => {
      const dx = posRef.current.x - ringPosRef.current.x;
      const dy = posRef.current.y - ringPosRef.current.y;
      ringPosRef.current.x += dx * 0.15;
      ringPosRef.current.y += dy * 0.15;
      ring.style.left = `${ringPosRef.current.x}px`;
      ring.style.top = `${ringPosRef.current.y}px`;
      rafRef.current = requestAnimationFrame(animate);
    };

    const onMouseEnterInteractive = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(0.5)';
      ring.style.transform = 'translate(-50%, -50%) scale(1.6)';
      ring.style.borderColor = 'var(--brand-primary)';
      ring.style.backgroundColor = 'rgba(0, 163, 168, 0.08)';
    };

    const onMouseLeaveInteractive = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.borderColor = 'rgba(0, 163, 168, 0.5)';
      ring.style.backgroundColor = 'transparent';
    };

    window.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    const interactiveEls = document.querySelectorAll('a, button, [role="button"], input, textarea, .card-hover-effect, .nav-link');
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    // Re-bind on DOM changes
    const observer = new MutationObserver(() => {
      const newEls = document.querySelectorAll('a, button, [role="button"], input, textarea, .card-hover-effect, .nav-link');
      newEls.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
        el.addEventListener('mouseenter', onMouseEnterInteractive);
        el.addEventListener('mouseleave', onMouseLeaveInteractive);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
  }, []);

  // Hide on mobile/touch devices
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (isTouchDevice) return null;

  return (
    <>
      {/* Dot */}
      <div ref={dotRef} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '6px',
        height: '6px',
        background: 'var(--brand-primary)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 10000,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.15s ease, background 0.15s ease'
      }} />
      {/* Ring */}
      <div ref={ringRef} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '36px',
        height: '36px',
        border: '1.5px solid rgba(0, 163, 168, 0.5)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease',
        backgroundColor: 'transparent'
      }} />
      <style>{`
        @media (min-width: 768px) {
          * { cursor: none !important; }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
