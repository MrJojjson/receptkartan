export const onChangeInput = (page, id, value) => (dispatch) => {
  dispatch({
    type: 'ON_CHANGE_INPUT',
    payload: {
      page,
      id,
      value,
    },
  });
};

export const onChangeDropdown = (page, id, value, splitValue, typingWord, typingWordIndex) => (dispatch) => {
  dispatch({
    type: 'ON_CHANGE_DROPDOWN',
    payload: {
      page,
      id,
      value,
      splitValue,
      typingWord,
      typingWordIndex,
    },
  });
};

export const onChangeDropdownSplitValue = (page, id, value, index) => (dispatch) => {
  dispatch({
    type: 'ON_CHANGE_DROPDOWN_SPLIT_VALUE',
    payload: {
      page,
      id,
      value,
      index,
    },
  });
};

export const onToggleDropdown = (page, id, value) => (dispatch) => {
  dispatch({
    type: 'ON_TOGGLE_DROPDOWN',
    payload: {
      page,
      id,
      value,
    },
  });
};

export const onAddItemToList = (page, id, item) => (dispatch) => {
  dispatch({
    type: 'ON_ADD_ITEM_TO_LIST',
    payload: {
      page,
      id,
      item,
    },
  });
};

export const onEditItemInList = (page, id, item) => (dispatch) => {
  dispatch({
    type: 'ON_EDIT_ITEM_IN_LIST',
    payload: {
      page,
      id,
      item,
    },
  });
};

export const onRemoveItemFromList = (page, id, item) => (dispatch) => {
  dispatch({
    type: 'ON_REMOVE_ITEM_FROM_LIST',
    payload: {
      page,
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
