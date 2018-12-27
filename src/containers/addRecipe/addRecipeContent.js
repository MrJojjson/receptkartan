import React from 'react';

import Container from '../../genericElements/container';
import Dropdown from '../../genericElements/dropdown';
import Input from '../../genericElements/input';
import List from '../../genericElements/list';
import Checkbox from '../../genericElements/checkbox';

import {
  getDropdownValue,
  getDropdownTypingWord,
  getDropdownTypingWordIndex,
  isDropdownOpen,
  getList,
} from '../../selectors';

import {} from '../../utils';

import { countries, addedCountries, measuringUnits } from '../../data';

import './addRecipeContent.css';

const PAGE = 'addRecipe';

const addIngredientTypingWord = props => getDropdownTypingWord(props.store, PAGE, 'ingredients');
const addIngredientTypingWordIndex = props => getDropdownTypingWordIndex(props.store, PAGE, 'ingredients');

const getCorrectOptionList = (props) => {
  const typingWordIndex = addIngredientTypingWordIndex(props);
  if (typingWordIndex === 0) {
    return [];
  }
  if (typingWordIndex === 1) {
    return measuringUnits;
  }
  if (typingWordIndex === 2) {
    return countries;
  }
  return [];
};

const AddRecipeContent = props => (
  <Container size="full" >
    <Input size="large" placeholder="Recipe name" id="recipeName" page={PAGE} />
    <Input size="large" placeholder="Duration" id="duration" page={PAGE} digits />
    <Input size="large" placeholder="Chef's name" id="chefsName" page={PAGE} />
    <Dropdown
      size="x-large"
      id="ingredients"
      page={PAGE}
      options={getCorrectOptionList(props)}
      multiOptions
      placeholder="Add ingredient"
    />
    <List
      options={getList(props.store, PAGE, 'ingredients')}
      type="Badge"
      size="auto"
      page={PAGE}
      id="ingredients"
      editable
    />
    <Dropdown
      size="x-large"
      id="country"
      page={PAGE}
      options={countries}
      placeholder="Add country"
    />
    <List
      options={getList(props.store, PAGE, 'country')}
      type="Badge"
      size="auto"
      page={PAGE}
      id="country"
    />
    <Dropdown
      size="x-large"
      multiline
      id="instruction"
      page={PAGE}
      options={getList(props.store, PAGE, 'ingredients')}
      multiOptions
      placeholder="Add instructions"
    />
    <List
      options={getList(props.store, PAGE, 'instruction')}
      type="Text"
      size="auto"
      page={PAGE}
      id="instruction"
    />
  </Container>
);

export default AddRecipeContent;
