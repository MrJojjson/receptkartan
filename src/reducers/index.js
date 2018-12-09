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
    default:
      return state;
  }
};

export default combineReducers({
  store,
});
