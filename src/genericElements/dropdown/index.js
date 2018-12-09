import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Text from '../text';

import {
  onChangeDropdown,
  onToggleDropdown,
} from '../../actions';

import {
  getDropdownValue,
  isDropdownOpen,
} from '../../selectors';

import './dropdown.css';

const inputValue = props => getDropdownValue(props.store, props.id);
const dropdownOpen = props => isDropdownOpen(props.store, props.id);

const eraseButton = (props, active) => (
  <button
    className={`
      clear-all
      ${active && 'active'}
    `}
    onClick={() => props.onChangeDropdown(props.id, '')}
  >
    <FontAwesomeIcon icon="eraser" />
  </button>
);

const showDropdownButton = (props, active) => (
  <button
    className={`
      toggle-list-button
      ${active && 'active'}
    `}
    onClick={() => props.onToggleDropdown(props.id, !active)}
  >
    <FontAwesomeIcon icon="chevron-circle-down" />
  </button>
);

const hasValue = props => inputValue(props).length > 0;

const Dropdown = props => (
  <div className="dropdown-container">
    <div className="dropdown-input-container">
      <input
        className={`
          ${props.size}-dropdown
        `}
        placeholder={props.placeholder}
        value={inputValue(props)}
        onChange={event => props.onChangeDropdown(props.id, event.target.value)}
      />
      <Text
        type="floating-placeholder"
        active={hasValue(props)}
        size="floating"
      >
        {props.placeholder}
      </Text>
      {eraseButton(props, hasValue(props))}
      {showDropdownButton(props, dropdownOpen(props))}
    </div>
    <div
      className={`
        dropdown-list-container
        ${dropdownOpen(props) && 'active'}
      `}
    >
    </div>
  </div>
);

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  onChangeDropdown: (id, value) => dispatch(onChangeDropdown(id, value)),
  onToggleDropdown: (id, value) => dispatch(onToggleDropdown(id, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dropdown);
