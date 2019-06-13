import React from "react";
import { useWindowDimensions } from './window-dimensions-provider';

function NavigationProvider({ breakpoint, renderDesktop, renderMobile }) {
  const { width } = useWindowDimensions();
  const navigation = width > breakpoint ? renderDesktop : renderMobile;
  return (
    <div>
      <div>the current window width is {width}</div>
      <div>the breakpoint is {breakpoint}</div>
      { navigation() }
    </div>
  );
}

export default NavigationProvider;
