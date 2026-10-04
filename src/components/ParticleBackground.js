import React from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
  return (
    <div className="particle-container">
      {[...Array(30)].map((_, i) => (
        <div key={i} className="particle" style={{
          '--delay': `${Math.random() * 5}s`,
          '--duration': `${15 + Math.random() * 10}s`,
          '--x': `${Math.random() * 100}%`,
          '--y': `${Math.random() * 100}%`,
          '--size': `${2 + Math.random() * 4}px`
        }} />
      ))}
      <svg className="particle-lines" width="100%" height="100%">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default ParticleBackground;
