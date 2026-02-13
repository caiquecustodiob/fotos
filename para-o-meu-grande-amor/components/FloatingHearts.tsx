
import React, { useEffect, useState } from 'react';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: string; size: string; duration: string }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const left = Math.random() * 100 + '%';
      const size = Math.random() * (30 - 10) + 10 + 'px';
      const duration = Math.random() * (10 - 5) + 5 + 's';

      setHearts(prev => [...prev, { id, left, size, duration }]);

      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== id));
      }, 10000);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart-particle text-rose-300 opacity-60"
          style={{
            left: heart.left,
            fontSize: heart.size,
            animationDuration: heart.duration,
            bottom: '-20px'
          }}
        >
          ❤️
        </div>
      ))}
    </>
  );
};

export default FloatingHearts;
