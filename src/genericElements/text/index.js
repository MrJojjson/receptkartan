import React from 'react';

import './text.css';

const Text = ({
  size,
  children,
  title,
  type,
  active,
}) => (
  <div
    className={`
      text
      ${size}
      ${type}
      ${active && 'active'}
    `}
  >
    {title}
  </div>
);

export default Text;
