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
    case 'ON_ADD_ITEM_TO_LIST':
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.id]: state.lists && state.lists[action.payload.id]
            ? [...state.lists[action.payload.id], action.payload.item]
            : [action.payload.item],
        },
      };
    // NOT WORKING!
    case 'ON_REMOVE_ITEM_FROM_LIST':
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.id]: state.lists[action.payload.id].splice(state.lists[action.payload.id].filter(a => a.code.indexOf(action.payload.item.code)), 1),
        },
      };
    case 'ON_MAP_CONTROLS_ZOOM':
      return {
        ...state,
        map: {
          ...state.map,
          zoom: action.payload.zoom,
        },
      };
    case 'ON_MAP_CONTROLS_ZOOM_RESET':
      return {
        ...state,
        map: {
          ...state.map,
          zoom: action.payload.zoom,
          center: action.payload.center,
        },
      };
    case 'ON_MAP_CITY_CLICK':
      return {
        ...state,
        map: {
          ...state.map,
          zoom: action.payload.zoom,
          center: action.payload.center,
        },
      };
    default:
      return state;
  }
};

export default combineReducers({
  store,
});
