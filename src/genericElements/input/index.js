import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Text from '../text';

import { onChangeInput } from '../../actions';
import { getInputValue } from '../../selectors';
import './input.css';

const inputValue = props => getInputValue(props.store, props.id);

const eraseButton = (props, active) => (
  <button
    className={`
        clear-all
        ${active && 'active'}
      `}
    onClick={() => props.onChangeInput(props.id, '')}
  >
    <FontAwesomeIcon icon="eraser" />
  </button>
);

const hasValue = props => inputValue(props).length > 0;

const Input = props => (
  <div className="input-container">
    <input
      className={`
        ${props.size}-input
      `}
      placeholder={props.placeholder}
      value={inputValue(props)}
      onChange={event => props.onChangeInput(props.id, event.target.value)}
    />
    <Text
      type="floating-placeholder"
      active={hasValue(props)}
      size="floating"
      title={props.placeholder}
    />
    {eraseButton(props, hasValue(props))}
  </div>
);
const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  onChangeInput: (id, value) => dispatch(onChangeInput(id, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);
