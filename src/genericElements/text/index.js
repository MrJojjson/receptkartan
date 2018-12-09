import React from 'react';

import './text.css';

const Text = ({
  size,
  children,
  type,
  active,
}) => (
  <div className={`
      ${size}-text
      ${type}
      ${active && 'active'}
    `}
  >
    {children}
  </div>
);

export default Text;
