import React from 'react';

import Text from '../text';

import './button.css';

const Button = ({ size, title, border }) => (
  <button
    className={`
      ${size}-button
      ${border ? 'border' : ''}
    `}
  >
    <Text title={title} />
  </button>
);

export default Button;
