import { USER_AUTHORISED } from "./actions";

const initialState = {
  isUserLoggedIn: false
};

function rootReducer(state = initialState, action) {
  if (action.type === USER_AUTHORISED) {
    return {
      ...state,
      isUserLoggedIn: !state.isUserLoggedIn
    };
  }

  return state;
}

export default rootReducer;
