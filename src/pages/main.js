import React from 'react';
import { connect } from 'react-redux';

import Container from '../genericElements/container';
import Button from '../genericElements/button';
import Text from '../genericElements/text';
import Input from '../genericElements/input';
import Dropdown from '../genericElements/dropdown';
import Badge from '../genericElements/badge';
import Map from '../genericElements/map';

import MapControls from '../genericElements/map/mapControls';
import MapSearch from '../genericElements/map/mapSearch';

import MainAside from '../containers/main/mainAside';

const Main = props => (
  <Container size="full" align="row">
    <MainAside {...props} />
    <Container size="content" align="center" >
      <MapControls />
      <Map />
    </Container>
  </Container>
);

const mapStateToProps = state => ({
  ...state,
});

export default connect(
  mapStateToProps,
  null,
)(Main);
