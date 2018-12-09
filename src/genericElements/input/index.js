import React from 'react';
import { connect } from 'react-redux';

import Text from '../text';

import { onChangeInput } from '../../actions';
import { getInputValue } from '../../selectors';
import './input.css';

const Input = props => (
  <div className="input-container">
    <input
      className={`
        ${props.size}-input
      `}
      placeholder={props.placeholder}
      value={getInputValue(props.store, props.id) || ''}
      onChange={event => props.onChangeInput(props.id, event.target.value)}
    />
    <button className="clear-all" onClick={() => props.onChangeInput(props.id, '')}>X</button>
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
