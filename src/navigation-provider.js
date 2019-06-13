import React, { useState, useEffect } from "react";

function NavigationProvider({ breakpoint }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div>the current window size is {windowSize}</div>
      <div>the breakpoint is {breakpoint}</div>
      {breakpoint > windowSize &&
        <div>BREAKPOINT EXCEEDED</div>
      }
    </div>
  );
}

export default NavigationProvider;
