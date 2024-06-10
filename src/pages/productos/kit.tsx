import React, { useEffect, useState } from 'react';

const images = [
  '/images/KitAsegure.jpg',
  '/images/KitTodo.jpg',
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
    <div className='flex flex-col items-center justify-center rounded-xl mt-4'>
      <img className='w-[700px] rounded-[inherit] border object-contain shadow-lg dark:block lg:w-[1000px]' src={images[currentImage]} />
    </div>
  );
};

export default AnimatedBackground;