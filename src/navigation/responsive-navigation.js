import React from "react";
import { useWindowDimensions } from '../window-dimensions-provider';
import MobileNavigation from "./mobile-navigation";
import DesktopNavigation from "./desktop-navigation";

function ResponsiveNavigation({ breakpoint  }) {
  const { width } = useWindowDimensions();
  const navigationOptions = [
    'editor',
    'history',
    'settings',
  ];

  return width < breakpoint ? <MobileNavigation options={ navigationOptions } /> : <DesktopNavigation options={ navigationOptions } />;
}

export default ResponsiveNavigation;
