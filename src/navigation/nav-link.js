import React from 'react';
import PropTypes from 'prop-types';
import * as ReactRouter from 'react-router-dom';

function NavLink(props) {
  function relativePathMatches(match, location) {
    return (
      location.pathname === props.to ||
      location.pathname.endsWith(`/${props.to}`)
    );
  }
  return (
    <ReactRouter.NavLink
      {...props}
      isActive={relativePathMatches}
      className="nav-item__link"
      activeClassName="nav-item__link--active"
    />
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired
};

function Nav(props) {
  return (
    <div className="nav-container" {...props} />
  );
}

export {
  NavLink,
  Nav,
};
