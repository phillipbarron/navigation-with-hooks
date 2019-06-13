import React, { useState, useEffect } from 'react';

function NavigationProvider() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
        setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, []);
  return (
    <div>
      the current window size is {windowSize}
    </div>);
}

export default NavigationProvider;
