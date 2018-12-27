import React from 'react';
import { connect } from 'react-redux';

import Badge from '../badge';
import Button from '../button';
import Checkbox from '../checkbox';
import Dropdown from '../dropdown';
import Text from '../text';

import './list.css';

const typeOfList = (props, item) => {
  const { type } = props;
  if (type === 'Badge') {
    return <Badge item={item} size={props.size} page={props.page} id={props.id} editable={props.editable} />;
  }
  if (type === 'Button') {
    return <Button item={item} size={props.size} />;
  }
  if (type === 'Checkbox') {
    return <Checkbox item={item} size={props.size} />;
  }
  if (type === 'Dropdown') {
    return <Dropdown item={item} size={props.size} />;
  }
  if (type === 'Text') {
    return <Text title={item.value} size={props.size} page={props.page} id={props.id} editable={props.editable} />;
  }
  return null;
};

const List = props => (
  <ul
    className={`
    list
    ${props.size}
    `}
  >
    {props.options.map(item => (
      <li key={`${props.page}-${props.id}-${item.code || item.id}`}>
        {typeOfList(props, item)}
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  ...state,
});

export default connect(
  mapStateToProps,
  null,
)(List);
