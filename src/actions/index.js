export const onChangeInput = (id, value) => (dispatch) => {
  console.log('id', id);
  console.log('value', value);
  dispatch({
    type: 'ON_CHANGE_INPUT',
    payload: {
      id,
      value,
    },
  });
};

export const secondAction = () => (dispatch) => {
  dispatch({
    type: 'SECOND_ACTION',
    payload: 'result_of_simple_action',
  });
};
