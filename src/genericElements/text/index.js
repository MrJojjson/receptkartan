import React from 'react';

import './text.css';

const Text = ({ size, children }) => (
  <div className={`
      ${size}-text
    `}
  >
    {children}
  </div>
);

export default Text;
