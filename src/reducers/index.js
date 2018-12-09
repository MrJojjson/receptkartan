import { combineReducers } from 'redux';

const store = (state = {}, action) => {
  switch (action.type) {
    case 'FIRST_ACTION':
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  store,
});
