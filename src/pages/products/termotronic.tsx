import React, { useEffect, useState } from 'react';

const images = [
  '/images/TermotronicAhorre.jpg',
  '/images/TermotronicDuradero-BanoBlanco.jpg',
  '/images/TermotronicLimites.jpg',
  '/images/TermotronicLimites2.jpg',
  '/images/TermotronicTodaLaVida-BanoBlanco.jpg',
  '/images/TermotronicTodaLaVidaBanoMarron.jpg',
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
    <div className='flex flex-col items-center justify-center rounded-xl'>
      <img className='w-[700px] rounded-[inherit] border object-contain shadow-lg dark:block' src={images[currentImage]} style={{ width: "80%", }} />
    </div>
  );
};

export default AnimatedBackground;