import { combineReducers } from "redux";
import PlayerOneReducer from "../Reducers/Playerone";
import PlayerTwoReducer from "../Reducers/Playertwo";

const reducer = combineReducers({
  playerOne: PlayerOneReducer,
  playerTwo: PlayerTwoReducer,
});

export default reducer;
