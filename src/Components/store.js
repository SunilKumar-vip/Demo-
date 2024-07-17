import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import { thunk } from "redux-thunk";
import reducer from "../Reducers";
const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
