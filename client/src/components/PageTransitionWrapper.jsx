import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageTransitionAnimation from './PageTransitionAnimation';

const PageTransitionWrapper = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 3000); // Adjust this value to match your desired transition duration

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isTransitioning && <PageTransitionAnimation />}
      {children}
    </>
  );
};

export default PageTransitionWrapper;

