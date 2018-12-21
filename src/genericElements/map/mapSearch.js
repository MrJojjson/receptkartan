import React from 'react';
import { connect } from 'react-redux';

import Text from '../text';
import Button from '../button';
import Dropdown from '../dropdown';

import {
  onAddItemToList,
} from '../../actions';

import './mapSearch.css';

import { countries } from '../../data';

const MapSearch = props => (
  <div className="map-search-container">
    <Dropdown
      size="x-large"
      id="country"
      page="mapSearch"
      options={countries}
      placeholder="Search for country"
    />
  </div>
);

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  onAddItemToList: (id, item) => dispatch(onAddItemToList(id, item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapSearch);
