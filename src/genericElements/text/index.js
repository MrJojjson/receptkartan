import React from 'react';

import './text.css';

const Text = ({
  size,
  children,
  className,
  inactive,
}) => (
  <div className={`
      ${size}-text
      ${className}
      ${inactive}
    `}
  >
    {children}
  </div>
);

export default Text;
