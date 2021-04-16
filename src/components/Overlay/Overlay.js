import React from "react";
import PropTypes from 'prop-types';
import "./Overlay.css";

export default function Overlay({toggler}) {
  return (
    <div className="overlay" onClick={toggler}></div>
  );
}

Overlay.propTypes = {
  toggler: PropTypes.func
}
