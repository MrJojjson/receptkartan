import React from 'react';

import './container.css';

const Container = ({ size, children }) => (
  <div className={`${size}-container`}>
    {children}
  </div>
);

export default Container;
