import React from 'react';

const Spinner = (props) => {
  return (
    <div className={`preloader ${props.cssClass}`}>
      <svg className="circular" viewBox="25 25 50 50">
        <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
      </svg>
    </div>
  );
};

Spinner.defaultProps = {
  cssClass: 'spinner'
};

export default Spinner;