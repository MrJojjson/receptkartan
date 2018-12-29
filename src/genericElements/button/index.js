import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Text from '../text';

import './button.css';

const Button = props => (
  <button
    className={`
      button
      ${props.size}
      ${props.border ? 'border' : ''}
    `}
    onClick={() => props.onButtonClick()}
  >
    <Text title={props.title || (props.item && props.item.value)} />
    {props.icon && <FontAwesomeIcon icon={props.icon} size="lg"/>}
  </button>
);

export default Button;
