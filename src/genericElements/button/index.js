import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Text from '../text';

import './button.css';

const Button = ({
  size,
  title,
  icon,
  border,
  onButtonClick,
}) => (
  <button
    className={`
      ${size}-button
      ${border ? 'border' : ''}
    `}
    onClick={() => onButtonClick()}
  >
    <Text title={title} />
    {icon && <FontAwesomeIcon icon={icon} size="lg"/>}
  </button>
);

export default Button;
