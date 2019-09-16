import { createStore, applyMiddleware, combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import counterReducer from "./counterReducer";
import counterMiddleware from "./counterMiddleWare";

let combinedReducers = combineReducers({
  auth: authenticationReducer,
  counter: counterReducer
});

export const store = createStore(
  combinedReducers,
  applyMiddleware(counterMiddleware)
);
