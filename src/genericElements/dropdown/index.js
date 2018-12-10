import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { filterArrayBasedOnString } from '../../utils';

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
const hasValue = props => inputValue(props).length > 0;

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

const dropdownToggleButton = (props, active) => (
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

const dropdownOptionsItem = (props, item) => (
  <li
    key={item.id}
    onClick={() => props.onChangeDropdown(props.id, item.value)}
  >
    {item.value}
  </li>
);

const dropdownOptionsList = props => (
  <ul
    className={`
      dropdown-list-container
      ${dropdownOpen(props) && 'active'}
    `}
  >
  {filterArrayBasedOnString(props.options, inputValue(props)).map(o => dropdownOptionsItem(props, o))}
  </ul>
);

const onChangeInputText = (event, props) => {
  const { value } = event.target;
  props.onChangeDropdown(props.id, value);
  if (value.length > 0 && !dropdownOpen(props)) {
    props.onToggleDropdown(props.id, !dropdownOpen(props));
  } else if (value.length === 0 && dropdownOpen(props)) {
    props.onToggleDropdown(props.id, !dropdownOpen(props));
  }
};

const Dropdown = props => (
  <div className="dropdown-container">
    <div className="dropdown-input-container">
      <input
        className={`
          ${props.size}-dropdown
        `}
        placeholder={props.placeholder}
        value={inputValue(props)}
        onChange={event => onChangeInputText(event, props)}
      />
      <Text
        type="floating-placeholder"
        active={hasValue(props)}
        size="floating"
        title={props.placeholder}
      />
      {eraseButton(props, hasValue(props))}
      {dropdownToggleButton(props, dropdownOpen(props))}
    </div>
    {dropdownOptionsList(props)}
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
