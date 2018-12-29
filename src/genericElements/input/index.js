import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Text from '../text';

import { onChangeInput } from '../../actions';
import { getInputValue } from '../../selectors';
import './input.css';

const inputValue = props => getInputValue(props.store, props.page, props.id);
// let inputText = '';

// const onBlur = (props) => {
//   const hours = Math.trunc(inputValue(props) / 60);
//   const minutes = inputValue(props) % 60;
//   inputText = `${hours} h and ${minutes} min`;
//   console.log('inputText', inputText);
// };

const eraseButton = (props, active) => (
  <button
    className={`
        clear-all
        ${active && 'active'}
      `}
    onClick={() => props.onChangeInput(props.page, props.id, '')}
  >
    <FontAwesomeIcon icon="eraser" />
  </button>
);

const hasValue = props => inputValue(props).length > 0;

const Input = props => (
  <div className="input-container">
    <input
      className={`
        input
        ${props.size}
      `}
      type={props.digits ? 'number' : 'text'}
      placeholder={props.placeholder}
      value={inputValue(props)}
      onChange={event => props.onChangeInput(props.page, props.id, event.target.value)}
      // onBlur={() => props.digits && onBlur(props)}
      // onFocus={() => props.digits && onFocus()}
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
  onChangeInput: (page, id, value) => dispatch(onChangeInput(page, id, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);
