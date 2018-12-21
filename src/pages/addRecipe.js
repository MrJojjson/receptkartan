import React from 'react';
import { connect } from 'react-redux';

import Container from '../genericElements/container';
import Button from '../genericElements/button';
import Text from '../genericElements/text';
import Input from '../genericElements/input';
import Dropdown from '../genericElements/dropdown';
import Badge from '../genericElements/badge';

import AddRecipeContent from '../containers/addRecipe/addRecipeContent';

const AddRecipe = props => (
  <Container size="full" align="row">
    <AddRecipeContent {...props} />
  </Container>
);

const mapStateToProps = state => ({
  ...state,
});

export default connect(
  mapStateToProps,
  null,
)(AddRecipe);
