import React, { useState } from 'react';

function NavigationProvider() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  return (
    <div>
      the current window size is {windowSize}
    </div>);
}

export default NavigationProvider;
