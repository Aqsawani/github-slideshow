import React, { useEffect, useRef, useCallback } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef(null);
  const isHovering = useRef(false);

  const animate = useCallback(() => {
    const dx = mouse.current.x - ring.current.x;
    const dy = mouse.current.y - ring.current.y;
    ring.current.x += dx * 0.2;
    ring.current.y += dy * 0.2;

    if (ringRef.current) {
      ringRef.current.style.transform = `translate3d(${ring.current.x - 18}px, ${ring.current.y - 18}px, 0) scale(${isHovering.current ? 1.5 : 1})`;
    }
    raf.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      dot.style.transform = `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`;
    };

    const onEnter = () => { isHovering.current = true; };
    const onLeave = () => { isHovering.current = false; };

    const bind = () => {
      document.querySelectorAll('a,button,[role="button"],input,textarea,.nav-link').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf.current = requestAnimationFrame(animate);
    bind();

    const observer = new MutationObserver(bind);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
      observer.disconnect();
    };
  }, [animate]);

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) return null;

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', top: 0, left: 0, width: '6px', height: '6px',
        background: 'var(--brand-primary)', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 10000, willChange: 'transform'
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', top: 0, left: 0, width: '36px', height: '36px',
        border: '1.5px solid rgba(0, 163, 168, 0.5)', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9999, willChange: 'transform',
        transition: 'transform 0.08s linear, border-color 0.2s'
      }} />
      <style>{`@media (min-width: 768px) { * { cursor: none !important; } }`}</style>
    </>
  );
};

export default CustomCursor;
