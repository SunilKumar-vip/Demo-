export const incplayerone = () => async (dispatch) => {
  dispatch({
    type: "INC_PLAYER_ONE_SCORE",
  });
};
export const decplayerone = () => async (dispatch) => {
  dispatch({
    type: "DEC_PLAYER_ONE_SCORE",
  });
};
export const incplayertwo = () => async (dispatch) => {
  dispatch({
    type: "INC_PLAYER_TWO_SCORE",
  });
};
export const decplayertwo = () => async (dispatch) => {
  dispatch({
    type: "DEC_PLAYER_TWO_SCORE",
  });
};

export const incbulkplayertwo = (value) => async (dispatch) => {
  dispatch({
    type: "INC_PLAYER_BULK_SCORE",
    payload: value,
  });
};
