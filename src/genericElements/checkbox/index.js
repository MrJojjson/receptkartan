import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  onAddItemToList,
  onRemoveItemFromList,
} from '../../actions';
import Text from '../text';

import './checkbox.css';

const Checkbox = props => (
  <span
    className={`
      ${props.size}-checkbox
    `}
  >
      {console.log('props checkbox', props)}
    <button
      className="check-icon"
      onClick={() => (
        props.checked
          ? props.onRemoveItemFromList(props.id, props.item)
          : props.onAddItemToList(props.id, props.item))
    }>
      {props.checked && <FontAwesomeIcon className="check-icon-checkmark" icon={'check'} />}
    </button>
    <Text title={props.item.value} />
  </span>
);

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  onAddItemToList: (id, item) => dispatch(onAddItemToList(id, item)),
  onRemoveItemFromList: (id, item) => dispatch(onRemoveItemFromList(id, item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkbox);
