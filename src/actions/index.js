export const firstAction = () => (dispatch) => {
  dispatch({
    type: 'FIRST_ACTION',
    payload: 'result_of_simple_action',
  });
};

export const secondAction = () => (dispatch) => {
  dispatch({
    type: 'SECOND_ACTION',
    payload: 'result_of_simple_action',
  });
};
