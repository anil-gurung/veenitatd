import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top-left corner of the page
  }, [pathname]);

  return null; // This component only handles the side effect, so it renders nothing
};

export default ScrollToTop;
