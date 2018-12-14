export const onChangeInput = (id, value) => (dispatch) => {
  dispatch({
    type: 'ON_CHANGE_INPUT',
    payload: {
      id,
      value,
    },
  });
};

export const onChangeDropdown = (id, value) => (dispatch) => {
  dispatch({
    type: 'ON_CHANGE_DROPDOWN',
    payload: {
      id,
      value,
    },
  });
};

export const onToggleDropdown = (id, value) => (dispatch) => {
  dispatch({
    type: 'ON_TOGGLE_DROPDOWN',
    payload: {
      id,
      value,
    },
  });
};

export const onAddItemToList = (id, item) => (dispatch) => {
  dispatch({
    type: 'ON_ADD_ITEM_TO_LIST',
    payload: {
      id,
      item,
    },
  });
};

export const onRemoveItemFromList = (id, item) => (dispatch) => {
  dispatch({
    type: 'ON_REMOVE_ITEM_FROM_LIST',
    payload: {
      id,
      item,
    },
  });
};

export const onMapControlsZoom = zoom => (dispatch) => {
  dispatch({
    type: 'ON_MAP_CONTROLS_ZOOM',
    payload: {
      zoom,
    },
  });
};

export const onMapControlsZoomReset = (zoom, center) => (dispatch) => {
  dispatch({
    type: 'ON_MAP_CONTROLS_ZOOM_RESET',
    payload: {
      zoom,
      center,
    },
  });
};

export const onMapCityClick = (zoom, center) => (dispatch) => {
  dispatch({
    type: 'ON_MAP_CITY_CLICK',
    payload: {
      zoom,
      center,
    },
  });
};
