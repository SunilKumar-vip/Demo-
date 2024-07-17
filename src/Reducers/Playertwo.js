const initialState = {
  name: "Sunil",
  score: 80,
};

function PlayerTwoReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "INC_PLAYER_TWO_SCORE":
      return { ...state, score: state.score + 1 };
    case "DEC_PLAYER_TWO_SCORE":
      return { ...state, score: state.score - 1 };
    case "INC_PLAYER_BULK_SCORE":
      return { ...state, score: state.score + payload };
    default:
      return state;
  }
}

export default PlayerTwoReducer;
