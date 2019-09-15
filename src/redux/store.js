import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers.js";
import counterMiddleware from './counterMiddleWare';

export const store = createStore(reducer, applyMiddleware(counterMiddleware));

