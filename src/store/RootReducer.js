// src/store/RootReducer.js
import { combineReducers } from "redux";
// import someFeatureReducer from "./someFeature/reducer";

function someFeatureReducer(state = "hi", action) {
  return state;
}

const RootReducer = combineReducers({
  someFeature: someFeatureReducer,
  // etc...
});

export default RootReducer;
