import React, { useEffect, useState } from 'react';

const images = [
  '/images/TermotronicAhorre.jpg',
  '/images/TermotronicDuradero-BanoBlanco.jpg',
  '/images/TermotronicLimites.jpg',
  '/images/TermotronicLimites2.jpg',
  '/images/TermotronicTodaLaVida-BanoBlanco.jpg',
  '/images/TermotronicLimTermotronicTodaLaVidaBanoMarrontes.jpg',
];

const AnimatedBackground: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;