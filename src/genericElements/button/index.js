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
    <Text>{title}</Text>
  </button>
);

export default Button;
