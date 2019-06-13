import React from "react";
import { useWindowDimensions } from '../window-dimensions-provider';
import MobileNavigation from "./mobile-navigation";
import DesktopNavigation from "./desktop-navigation";

function ResponsiveNavigation({ breakpoint }) {
  const { width } = useWindowDimensions();
  return width < breakpoint ? <MobileNavigation /> : <DesktopNavigation />;
}

export default ResponsiveNavigation;
