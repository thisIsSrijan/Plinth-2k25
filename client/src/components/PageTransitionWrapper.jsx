import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import PageTransitionAnimation from "./PageTransitionAnimation";
import PropTypes from 'prop-types';

const PageTransitionWrapper = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();
  const previousPath = useRef(location.pathname);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      previousPath.current = location.pathname;
      return;
    }

    if (previousPath.current !== location.pathname) {
      setIsTransitioning(true);

      const timer = setTimeout(() => {
        setIsTransitioning(false);
        previousPath.current = location.pathname;
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      {isTransitioning && <PageTransitionAnimation />}
      {!isTransitioning && children}
    </>
  );
};

PageTransitionWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageTransitionWrapper;
