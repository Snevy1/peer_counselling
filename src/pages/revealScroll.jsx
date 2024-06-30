import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../index.css';

const RevealOnScroll = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 10% of the component is visible
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-in-out ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
