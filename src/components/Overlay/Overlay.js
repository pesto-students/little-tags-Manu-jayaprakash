import React from "react";
import PropTypes from 'prop-types';
import "./Overlay.css";

export default function Overlay({drawerToggler}) {
  return (
    <div className="overlay" onClick={drawerToggler}></div>
  );
}

Overlay.propTypes = {
  drawerToggler: PropTypes.func
}
