import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

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
import AddRecipe from './pages/addRecipe';
import Container from './genericElements/container';

library.add(faEraser, faChevronDown, faTimes, faPlus, faMinus, faUndoAlt, faCheck, faSquare);

const App = () => (
  <Container size="full">
    <Container size="header" />
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/addRecipe" component={AddRecipe} />
    </Switch>
  </Container>
);

export default connect()(App);
