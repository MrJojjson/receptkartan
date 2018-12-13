import React from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
  Annotations,
  Annotation,
} from 'react-simple-maps';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';

import { onMapCityClick } from '../../actions';

import {
  getMapZoom,
  getMapCenter,
  getMapSearchCountries,
} from '../../selectors';

import { mockDataCities, countries } from '../../data';

import './map.css';

const getTextWidth = id => document.getElementById(id).getBBox().width;


const Map = props => (
  <Motion
    defaultStyle={{
      zoom: 1,
      x: 0,
      y: 20,
    }}
    style={{
      zoom: spring(getMapZoom(props.store), { stiffness: 210, damping: 20 }),
      x: spring(getMapCenter(props.store)[0], { stiffness: 210, damping: 20 }),
      y: spring(getMapCenter(props.store)[1], { stiffness: 210, damping: 20 }),
    }}
    >
    {() => (
      <ComposableMap
        projectionConfig={{ scale: 180 }}
        className="composable-map"
        >
        <ZoomableGroup center={[getMapCenter(props.store)[0], getMapCenter(props.store)[1]]} zoom={getMapZoom(props.store)}>
          <Geographies geography="./static/world-110m.json">
            {(geographies, projection) => (
              geographies.map((geography, i) => geography.id !== '010' && (
                <Geography
                  key={i}
                  geography={geography}
                  projection={projection}
                  className="countries"
                />
              )))}
          </Geographies>
          <Markers>
            {getMapSearchCountries(props.store, 'mapSearch').map((city, i) => (
              <Marker
                key={i}
                marker={city}
                onClick={() => props.onMapCityClick(getMapZoom(props.store) * 2, city.coordinates)}
                >
                <circle
                  cx={0}
                  cy={0}
                  r={2}
                  fill="#16a085"
                  stroke="#16a085"
                />
                <text
                  textAnchor="middle"
                  alignmentBaseline="text-after-edge"
                  y={city.markerOffset}
                  style={{
                    fill: '#607D8B',
                    fontSize: `${6 + getMapZoom(props.store)}px`,
                  }}
                  >
                  {city.value}
                </text>
              </Marker>
            ))}
          </Markers>
          {/* <Annotations>
            {countries.map((city, i) => (
              <Annotation
                key={i}
                dx={ 7 }
                dy={ -7 }
                subject={city.coordinates}
                strokeWidth={ 0.5 }
                stroke="#16a085"
                >
                <text fill='#16a085' id={`map-text-${i}`}>{city.name}</text>
            {setTimeout(() => <rect fill='rgba(255, 255, 255, 0.75)' width={getTextWidth(`map-text-${i}`)} height="13" x="-5" y="-10"></rect>, 0)}
              </Annotation>
            ))}
          </Annotations> */}
        </ZoomableGroup>
      </ComposableMap>
    )}
  </Motion>
);

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  onMapCityClick: (zoom, center) => dispatch(onMapCityClick(zoom, center)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
