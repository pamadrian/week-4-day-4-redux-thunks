// src/store/index.js
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./RootReducer";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

const store = createStore(RootReducer, enhancer);

export default store;
