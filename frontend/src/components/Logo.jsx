import React from 'react';

const Logo = ({ size = 'medium', onClick }) => {
  const sizes = {
    small: {
      fontSize: '1.25rem',
      letterSpacing: '-0.05em'
    },
    medium: {
      fontSize: '1.75rem',
      letterSpacing: '-0.05em'
    },
    large: {
      fontSize: '2.5rem',
      letterSpacing: '-0.05em'
    }
  };

  const currentSize = sizes[size] || sizes.medium;

  return (
    <div 
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        cursor: onClick ? 'pointer' : 'default',
        fontFamily: 'Inter, Arial, sans-serif',
        fontWeight: '900',
        fontSize: currentSize.fontSize,
        letterSpacing: currentSize.letterSpacing,
        lineHeight: '1',
        userSelect: 'none'
      }}
    >
      <span style={{ color: '#00A3A8' }}>OZ</span>
      <span style={{ color: '#D3D3D3' }}>ILUM</span>
      <span style={{ 
        color: '#00A3A8',
        fontSize: '0.5em',
        verticalAlign: 'super',
        marginLeft: '2px',
        fontWeight: '700'
      }}>™</span>
    </div>
  );
};

export default Logo;
