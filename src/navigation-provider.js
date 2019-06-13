import React, { useState } from 'react';

function NavigationProvider() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  return (
    <div>
      {windowSize}
    </div>);
}

export default NavigationProvider;
