import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  onRemoveItemFromList,
} from '../../actions';

import Text from '../text';

import './badge.css';

const Badge = props => (
  <span
    className={`
      ${props.size}-badge
    `}
  >
    <Text title={props.title || props.item.value} />
    <button
      className="remove-icon"
      onClick={() => props.onRemoveItemFromList(props.page, props.id, props.item)}
    >
      <FontAwesomeIcon icon="times" />
    </button>
  </span>
);

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  onRemoveItemFromList: (page, id, item) => dispatch(onRemoveItemFromList(page, id, item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Badge);
