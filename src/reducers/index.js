import { combineReducers } from 'redux';
import update from 'immutability-helper';

const store = (state = {}, action) => {
  switch (action.type) {
    case 'ON_CHANGE_INPUT':
      return {
        ...state,
        [action.payload.page]: {
          ...state[action.payload.page],
          [action.payload.id]: action.payload.value,
        },
      };
    case 'ON_CHANGE_DROPDOWN':
      return {
        ...state,
        [action.payload.page]: {
          ...state[action.payload.page],
          [action.payload.id]: {
            ...state[action.payload.page] && state[action.payload.page][action.payload.id],
            value: action.payload.value,
            typingWord: action.payload.typingWord,
            splitValue: action.payload.splitValue,
            typingWordIndex: action.payload.typingWordIndex,
          },
        },
      };
    case 'ON_CHANGE_DROPDOWN_SPLIT_VALUE':
      return update(state, {
        [action.payload.page]: {
          [action.payload.id]: {
            value: { $set: `${state[action.payload.page][action.payload.id].value} ${action.payload.value}` },
            splitValue: {
              [action.payload.index]: { $set: action.payload.value },
            },
          },
        },
      });
    case 'ON_TOGGLE_DROPDOWN':
      return {
        ...state,
        [action.payload.page]: {
          ...state[action.payload.page],
          [action.payload.id]: {
            ...state[action.payload.page] && state[action.payload.page][action.payload.id],
            open: action.payload.value,
          },
        },
      };
    case 'ON_ADD_ITEM_TO_LIST': {
      let isItemInList = -1;
      if (state[action.payload.page][action.payload.id].list) {
        isItemInList = state[action.payload.page][action.payload.id].list.findIndex(item => (
          item.id === action.payload.item.id
        ));
      }
      if (isItemInList !== -1) {
        return {
          ...state,
          errorMessage: {
            value: 'Item already added',
            page: action.payload.page,
            id: action.payload.id,
          },
        };
      }
      return {
        ...state,
        [action.payload.page]: {
          ...state[action.payload.page],
          [action.payload.id]: {
            ...state[action.payload.page] && state[action.payload.page][action.payload.id],
            list: state[action.payload.page][action.payload.id].list
              ? [...state[action.payload.page][action.payload.id].list, action.payload.item]
              : [action.payload.item],
          },
        },
      };
    }
    case 'ON_EDIT_ITEM_IN_LIST':
      return {
        ...state,
        [action.payload.page]: {
          ...state[action.payload.page],
          [action.payload.id]: {
            ...state[action.payload.page] && state[action.payload.page][action.payload.id],
            value: action.payload.item.value,
            typingWord: action.payload.item.typingWord,
            splitValue: action.payload.item.splitValue,
            typingWordIndex: action.payload.item.typingWordIndex,
          },
        },
      };
    case 'ON_REMOVE_ITEM_FROM_LIST':
      return {
        ...state,
        [action.payload.page]: {
          ...state[action.payload.page],
          [action.payload.id]: {
            ...state[action.payload.page][action.payload.id],
            list: [
              ...state[action.payload.page][action.payload.id].list.filter(item => item !== action.payload.item),
            ],
          },
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
