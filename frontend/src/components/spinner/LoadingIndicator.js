import React from 'react';

import './LoadingIndicator.css';

const LoadingIndicator = (props) => {
  return (
    <div className="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingIndicator;