import React from 'react';

import './container.css';

const Container = ({
  size,
  align,
  children,
}) => (
  <div
    className={`
      ${size}-container
      ${align}
    `}
  >
    {children}
  </div>
);

export default Container;
