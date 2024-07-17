const initialState = {
  name: "Leo",
  score: 80,
};

function PlayerOneReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "INC_PLAYER_ONE_SCORE":
      return { ...state, score: state.score + 1 };
    case "DEC_PLAYER_ONE_SCORE":
      return { ...state, score: state.score - 1 };
    default:
      return state;
  }
}

export default PlayerOneReducer;
