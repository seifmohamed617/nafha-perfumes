import React, { useMemo } from 'react';

export function BackgroundEffects() {
  // Generate random particles once for smooth performance
  const particles = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // 2px to 6px
      left: Math.random() * 100, // 0% to 100%
      top: Math.random() * 100, // 0% to 100%
      delay: Math.random() * 10, // 0s to 10s
      duration: Math.random() * 12 + 10 // 10s to 22s
    }));
  }, []);

  return (
    <div className="bg-effects-container" aria-hidden="true">
      {/* Gradient Glowing Lights & Blur Circles */}
      <div className="glow-circle glow-gold-1" />
      <div className="glow-circle glow-gold-2" />

      {/* Floating Gold Dust Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle-div"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`
          }}
        />
      ))}

      {/* Floating Fragrance Bottle Silhouettes & Icons */}
      <div
        className="floating-icon-div"
        style={{ top: '15%', left: '8%', fontSize: '4rem', animationDuration: '18s' }}
      >
        ✦
      </div>
      <div
        className="floating-icon-div"
        style={{ top: '65%', right: '7%', fontSize: '5rem', animationDuration: '22s', animationDelay: '2s' }}
      >
        ✧
      </div>
      <div
        className="floating-icon-div"
        style={{ top: '40%', left: '88%', fontSize: '3rem', animationDuration: '15s', animationDelay: '4s' }}
      >
        ❖
      </div>
      <div
        className="floating-icon-div"
        style={{ top: '80%', left: '15%', fontSize: '3.5rem', animationDuration: '20s', animationDelay: '1s' }}
      >
        ✦
      </div>

      {/* Subtle Smoke Drift Layer */}
      <div
        className="animate-smoke"
        style={{
          position: 'absolute',
          top: '30%',
          left: '20%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}
      />
    </div>
  );
}

export default BackgroundEffects;

