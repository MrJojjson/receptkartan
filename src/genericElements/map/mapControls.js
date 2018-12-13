import React from 'react';
import { connect } from 'react-redux';

import Text from '../text';
import Button from '../button';

import {
  onMapControlsZoom,
  onMapControlsZoomReset,
} from '../../actions';

import {
  getMapZoom,
} from '../../selectors';

import './mapControls.css';

const zoomInValue = props => getMapZoom(props.store) * 2;
const zoomOutValue = props => getMapZoom(props.store) / 2;


const MapControls = props => (
  <div className="map-controls-container">
    <Button onButtonClick={() => props.onMapControlsZoom(zoomInValue(props))} icon="plus" size="icon"/>
    <Button onButtonClick={() => props.onMapControlsZoom(zoomOutValue(props))} icon="minus" size="icon"/>
    <Button onButtonClick={() => props.onMapControlsZoomReset(1, [0, 20])} icon="undo-alt" size="icon"/>
  </div>
);

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  onMapControlsZoom: zoom => dispatch(onMapControlsZoom(zoom)),
  onMapControlsZoomReset: (zoom, center) => dispatch(onMapControlsZoomReset(zoom, center)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapControls);
