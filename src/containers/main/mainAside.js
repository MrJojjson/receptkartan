import React from 'react';

import Container from '../../genericElements/container';
import Dropdown from '../../genericElements/dropdown';
import Badge from '../../genericElements/badge';
import Checkbox from '../../genericElements/checkbox';

import MapControls from '../../genericElements/map/mapControls';
import MapSearch from '../../genericElements/map/mapSearch';

import { getMapSearchCountries } from '../../selectors';
import { existItemInArray } from '../../utils';

import { countries, addedCountries } from '../../data';

import './mainAside.css';

const ListOfCountries = props => (
  <ul className="main-aside-ul">
    {countries.map((country, i) => <li key={`${country.code}-${i}`} className="main-aside-li"><Checkbox id="mapSearch" size="auto" item={country} checked={existItemInArray(getMapSearchCountries(props.store, 'mapSearch'), country)}/></li>)}
  </ul>
);

const MainAside = props => (
  <Container size="aside" >
    <MapSearch />
    {ListOfCountries(props)}
  </Container>
);

export default MainAside;
