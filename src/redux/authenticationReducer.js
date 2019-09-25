import { USER_AUTHORISED } from "./actions";

const initialState = {
  isUserLoggedIn: false
};

function rootReducer(state = initialState, action) {
  if (action.type === USER_AUTHORISED) {
    return {
      ...state,
      isUserLoggedIn: action.payload.isUserAuthorized
    };
  }

  return state;
}

export default rootReducer;
