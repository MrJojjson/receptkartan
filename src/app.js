import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEraser,
  faChevronDown,
  faTimes,
  faPlus,
  faMinus,
  faUndoAlt,
  faCheck,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';

import Main from './pages/main';

import Container from './genericElements/container';

library.add(faEraser, faChevronDown, faTimes, faPlus, faMinus, faUndoAlt, faCheck, faSquare);

const App = () => (
  <Container size="full">
    <Container size="header" >
    </Container>
    <Main />
    {/* <Text size="small" title="Small text" />
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
    <Badge size="medium" title="Title of badge" /> */}
  </Container>
);

export default connect()(App);
