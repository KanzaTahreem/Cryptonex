import React from 'react';
import '../styles/Loader.css';

const Loader = () => (
  <div className="spinner_container">
    <div className="cssloader">
      <div className="sh1" />
      <div className="sh2" />
      <h4 className="lt">loading</h4>
    </div>
  </div>
);

export default Loader;
