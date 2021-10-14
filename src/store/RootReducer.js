// src/store/RootReducer.js
import { combineReducers } from "redux";
// import someFeatureReducer from "./someFeature/reducer";

// function someFeatureReducer(state = "hi", action) {
//   return state;
// }

import feedSliceReducer from "./feed/reducer";

const RootReducer = combineReducers({
  // someFeature: someFeatureReducer,
  // etc...
  feed: feedSliceReducer,
});

export default RootReducer;
