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
  console.log('id', id);
  console.log('value', value);
  dispatch({
    type: 'ON_CHANGE_DROPDOWN',
    payload: {
      id,
      value,
    },
  });
};

export const onToggleDropdown = (id, value) => (dispatch) => {
  console.log('id', id);
  console.log('switch', value);
  dispatch({
    type: 'ON_TOGGLE_DROPDOWN',
    payload: {
      id,
      value,
    },
  });
};
