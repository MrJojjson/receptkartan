import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Text from '../text';

import './badge.css';

const Badge = ({ size, title }) => (
  <span
    className={`
      ${size}-badge
    `}
  >
    <Text title={title} />
    <button className="remove-icon">
      <FontAwesomeIcon icon="times" />
    </button>
  </span>
);

export default Badge;
