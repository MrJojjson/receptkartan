import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Text from '../text';

import {
  onChangeDropdown,
  onChangeDropdownSplitValue,
  onToggleDropdown,
  onAddItemToList,
} from '../../actions';

import {
  getDropdownValue,
  getDropdownTypingWord,
  getDropdownTypingWordIndex,
  getDropdownSplitValue,
  isDropdownOpen,
  getList,
} from '../../selectors';

import {
  filterArrayBasedOnString,
  existItemInArray,
} from '../../utils';

import './dropdown.css';

const inputValue = props => getDropdownValue(props.store, props.page, props.id);
const inputTypingWord = props => getDropdownTypingWord(props.store, props.page, props.id);
const inputTypingWordIndex = props => getDropdownTypingWordIndex(props.store, props.page, props.id);
const inputSplitValue = props => getDropdownSplitValue(props.store, props.page, props.id);

const dropdownOpen = props => isDropdownOpen(props.store, props.page, props.id);
const getPageList = props => getList(props.store, props.page, props.id);
const hasValue = props => inputValue(props).length > 0;

const onItemClick = (props, item) => {
  if (props.multiOptions) {
    return [
      props.onChangeDropdownSplitValue(props.page, props.id, item.value, inputTypingWordIndex(props)),
      props.onToggleDropdown(props.page, props.id, !dropdownOpen(props)),
      // props.onAddItemToList(props.page, props.id, item),
    ];
  }
  return [
    props.onChangeDropdown(props.page, props.id, item.value),
    props.onToggleDropdown(props.page, props.id, !dropdownOpen(props)),
    // props.onAddItemToList(props.page, props.id, item),
  ];
};

const returnWord = (text, caretPos) => {
  const preText = text.substring(0, caretPos);
  if (preText.indexOf(' ') > 0) {
    const words = preText.split(' ');
    return words[words.length - 1];
  }
  return preText;
};

const eraseButton = (props, active) => (
  <button
    className={`
      dropdown-clear-all
      ${active && 'active'}
    `}
    onClick={() => [
      props.onChangeDropdown(props.page, props.id, ''),
      props.onToggleDropdown(props.page, props.id, !dropdownOpen(props)),
    ]}
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
    onClick={() => props.onToggleDropdown(props.page, props.id, !active)}
  >
    <FontAwesomeIcon icon="chevron-down" />
  </button>
);

const dropdownOptionsItem = (props, item, active, i) => (
  <li
    className={`
      ${inputValue(props) === item.value && 'picked'}
      ${active && 'dropdown-item-active'}
    `}
    key={`${props.id}-${item.value}`}
    onClick={() => [
      onItemClick(props, item),
      document.getElementById(`${props.page}-${props.id}`) && document.getElementById(`${props.page}-${props.id}`).focus(),
    ]}
    onKeyPress={e => (e.key === 'Enter' || e.key === 13)
      && [
        onItemClick(props, item),
        document.getElementById(`${props.page}-${props.id}`) && document.getElementById(`${props.page}-${props.id}`).focus(),
      ]
    }
    // onFocus={() => [
    //   onItemClick(props, item),
    //   document.getElementById(`${props.page}-${props.id}`) && document.getElementById(`${props.page}-${props.id}`).focus(),
    // ]}
  >
    <a href="#">{item.value}</a>
  </li>
);

const dropdownOptionsList = props => (
  <ul
    className={`
      dropdown-list-container
      ${dropdownOpen(props) && 'active'}
    `}
  >
  {filterArrayBasedOnString(props.options, props.multiOptions ? inputTypingWord(props) : inputValue(props)).map((item, i) => (
    dropdownOptionsItem(props, item, existItemInArray(getPageList(props), item), i)
  ))}
  </ul>
);

const onChangeMultiInputText = (event, props) => {
  const { value, selectionStart } = event.target;
  const caretPos = selectionStart;
  const splitValue = value.split(' ');
  const typingWord = returnWord(value, caretPos);
  const typingWordIndex = splitValue.indexOf(typingWord);
  if (splitValue) {
    props.onChangeDropdown(props.page, props.id, value, splitValue, typingWord, typingWordIndex);
  }

  if (value.length > 0 && !dropdownOpen(props)) {
    props.onToggleDropdown(props.page, props.id, !dropdownOpen(props));
  } else if (value.length === 0 && dropdownOpen(props)) {
    props.onToggleDropdown(props.page, props.id, !dropdownOpen(props));
  }
};

const onChangeInputText = (event, props) => {
  const { value } = event.target;
  props.onChangeDropdown(props.page, props.id, value, null, null, null);
  if (value.length > 0 && !dropdownOpen(props)) {
    props.onToggleDropdown(props.page, props.id, !dropdownOpen(props));
  } else if (value.length === 0 && dropdownOpen(props)) {
    props.onToggleDropdown(props.page, props.id, !dropdownOpen(props));
  }
};

const Dropdown = props => (
  <div className="dropdown-container">
    <div className="dropdown-input-container">
      <input
        id={`${props.page}-${props.id}`}
        className={`
          ${props.size}-dropdown
        `}
        placeholder={props.placeholder}
        value={props.multiOptions ? inputSplitValue(props).join(' ') : inputValue(props)}
        onChange={event => (
          props.multiOptions ? onChangeMultiInputText(event, props) : onChangeInputText(event, props)
        )}
        onKeyPress={e => (e.key === 'Enter' || e.key === 13) && onItemClick(props, inputValue(props))}
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
  onChangeDropdown: (page, id, value, splitValue, typingWord, typingWordIndex) => (
    dispatch(onChangeDropdown(page, id, value, splitValue, typingWord, typingWordIndex))
  ),
  onChangeDropdownSplitValue: (page, id, value, index) => dispatch(onChangeDropdownSplitValue(page, id, value, index)),
  onToggleDropdown: (page, id, value) => dispatch(onToggleDropdown(page, id, value)),
  onAddItemToList: (page, id, item) => dispatch(onAddItemToList(page, id, item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dropdown);
