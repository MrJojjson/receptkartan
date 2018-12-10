import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEraser, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

import Container from './genericElements/container';
import Button from './genericElements/button';
import Text from './genericElements/text';
import Input from './genericElements/input';
import Dropdown from './genericElements/dropdown';

import mockDropdownOptions from './data';

library.add(faEraser, faChevronCircleDown);

const App = () => (
  <Container size="full">
    <Text size="small" title="Small text" />
    <Text size="medium" title="Medium text" />
    <Text size="large" title="Large text" />
    <Text size="x-large" title="X-large text" />
    <Button size="x-large" title="Test button" border />
    <Button size="small" title="Test button without border but with ellipsis" />
    <Input size="small" id="small" placeholder="Small" />
    <Input size="medium" id="medium" placeholder="Medium" />
    <Input size="large" id="large" placeholder="Large" />
    <Input size="x-large" id="x-large" placeholder="X-Large" />
    <Dropdown size="large" id="dropdown" options={mockDropdownOptions} placeholder="Search..." />

  </Container>
);

export default connect()(App);
