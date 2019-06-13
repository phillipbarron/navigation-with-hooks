import React, { useState, useEffect } from "react";

function NavigationProvider({ breakpoint, renderDesktop, renderMobile }) {
  const [windowWidth, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const navigation = windowWidth > breakpoint ? renderDesktop : renderMobile;
  return (
    <div>
      <div>the current window width is {windowWidth}</div>
      <div>the breakpoint is {breakpoint}</div>
      {  navigation() }
    </div>
  );
}

export default NavigationProvider;
