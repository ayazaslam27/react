import { INCREMENT, DECREMENT, MAXCOUNTER, MINCOUNTER } from "./actions";

const initialState = {
  counter: 0
};

const DEFAULTVALUE = 5;
function rootReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1
    };
  }

  if (action.type === DECREMENT) {
    return {
      counter: state.counter - 1
    };
  }

  if (action.type === MAXCOUNTER) {
    return {
      counter: state.counter - DEFAULTVALUE
    };
  }

  if (action.type === MINCOUNTER) {
    return {
      counter: state.counter + DEFAULTVALUE
    };
  }

  return state;
}

export default rootReducer;