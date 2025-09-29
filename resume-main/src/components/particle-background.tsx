"use client";

import React, { useEffect, useState } from 'react';

const PARTICLE_COUNT = 100;

const ParticleBackground = () => {
  const [particles, setParticles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
        const isAccent = Math.random() > 0.7;
        const size = Math.random() * 4 + 1; // size between 1px and 5px
        
        const style = {
          '--particle-size': `${size}px`,
          '--particle-left': `${Math.random() * 100}%`,
          '--particle-top': `${Math.random() * 100}%`,
          '--particle-duration': `${Math.random() * 15 + 20}s`,
          '--particle-blur': size > 3 ? '1px' : '0px',
          '--particle-color': isAccent ? 'hsl(var(--accent))' : 'hsl(var(--primary))',
          animationDelay: `-${Math.random() * 35}s`,
        } as React.CSSProperties;
        
        return <div key={i} className="particle" style={style}></div>;
      });
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  return <div className="particle-container fixed inset-0 -z-10">{particles}</div>;
};

export default ParticleBackground;
