import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  moveX: number;
  moveY: number;
}

export default function StarryBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const starCount = window.innerWidth < 768 ? 40 : 80;
      const newStars: Star[] = [];
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 20 + 20,
          delay: Math.random() * 5,
          moveX: (Math.random() - 0.5) * 30,
          moveY: (Math.random() - 0.5) * 30,
        });
      }
      
      setStars(newStars);
    };

    generateStars();
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ background: '#000033' }}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${star.duration}s ease-in-out infinite, float-star-${star.id} ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        >
          <style>{`
            @keyframes float-star-${star.id} {
              0%, 100% {
                transform: translate(0, 0);
              }
              50% {
                transform: translate(${star.moveX}px, ${star.moveY}px);
              }
            }
          `}</style>
        </div>
      ))}
    </div>
  );
}
