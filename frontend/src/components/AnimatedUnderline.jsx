import React, { useEffect, useRef, useState } from 'react';

const AnimatedUnderline = ({ children, color = '#00A3A8', width = '105%', delay = 0, style = {} }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} style={{ position: 'relative', display: 'inline-block', ...style }}>
      {children}
      <svg
        viewBox="0 0 300 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          left: '-2.5%',
          bottom: '-4px',
          width: width,
          height: '10px',
          pointerEvents: 'none',
          overflow: 'visible'
        }}
      >
        <path
          d="M2 8.5C30 3.5 70 5 100 6.5C140 8.2 170 4 200 5.5C230 7 260 3.5 298 7"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: 400,
            strokeDashoffset: visible ? 0 : 400,
            transition: `stroke-dashoffset 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
            opacity: 0.7
          }}
        />
      </svg>
    </span>
  );
};

export default AnimatedUnderline;
