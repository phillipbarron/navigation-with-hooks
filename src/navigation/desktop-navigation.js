import React from "react";
import { Nav, NavLink } from "./nav-link";
import capitalise from "../text-helpers";

function DesktopNavigation({ options }) {
  const GAOnEvents = "click,auxclick,contextmenu";
  const navItem = (location, key) => (
    <NavLink
      role="tab"
      to={location}
      ga-on={GAOnEvents}
      ga-event-category={`${location} Tab Link`}
      key={key}
    >
      <span className="NavLink__label">{capitalise(location)}</span>
    </NavLink>
  );
  return <Nav>{options.map((option, index) => navItem(option, index))}</Nav>;
}

export default DesktopNavigation;
