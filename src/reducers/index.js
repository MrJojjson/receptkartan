import { combineReducers } from 'redux';
import update from 'immutability-helper';

const store = (state = {}, action) => {
  switch (action.type) {
    case 'ON_CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.payload.id]: action.payload.value,
        },
      };
    case 'ON_CHANGE_DROPDOWN':
      return {
        ...state,
        dropdowns: {
          ...state.dropdowns,
          [action.payload.id]: {
            ...state.dropdowns && state.dropdowns[action.payload.id],
            value: action.payload.value,
          },
        },
      };
    case 'ON_TOGGLE_DROPDOWN':
      return {
        ...state,
        dropdowns: {
          ...state.dropdowns,
          [action.payload.id]: {
            ...state.dropdowns && state.dropdowns[action.payload.id],
            open: action.payload.value,
          },
        },
      };
    default:
      return state;
  }
};

export default combineReducers({
  store,
});
