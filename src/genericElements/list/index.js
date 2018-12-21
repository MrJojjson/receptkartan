import React from 'react';
import { connect } from 'react-redux';

import Badge from '../badge';
import Button from '../button';
import Checkbox from '../checkbox';
import Text from '../text';

import './list.css';

const typeOfList = (props, item) => {
  const { type } = props;
  if (type === 'Badge') {
    return <Badge key={item.code} item={item} size={props.size} page={props.page} id={props.id} />;
  }
  if (type === 'Button') {
    return <Button key={item.code} item={item} size={props.size} />;
  }
  if (type === 'Checkbox') {
    return <Checkbox key={item.code} item={item} size={props.size} />;
  }
  if (type === 'Text') {
    return <Text {...props} />;
  }
  return null;
};

const List = props => (
  <ul
    className={`
      ${props.size}-list
    `}
  >
    {props.options.map(item => typeOfList(props, item))}
  </ul>
);

const mapStateToProps = state => ({
  ...state,
});

export default connect(
  mapStateToProps,
  null,
)(List);
