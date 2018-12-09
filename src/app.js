import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Container from './genericElements/container';
import Button from './genericElements/button';
import Text from './genericElements/text';
import Input from './genericElements/input';

const App = () => (
  <Container size="full">
    <Text size="small">Small text</Text>
    <Text size="medium">Medium text</Text>
    <Text size="large">Large text</Text>
    <Text size="x-large">X-large text</Text>
    <Button size="x-large" title="Test button" border />
    <Button size="small" title="Test button without border but with ellipsis" />
    <Input size="medium" id="test" value="Test value" placeholder="Test placeholder" />
  </Container>
);

export default connect()(App);
