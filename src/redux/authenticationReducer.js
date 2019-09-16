import { USER_AUTHORISED } from "./actions";

const initialState = {
  isUserAuthorized: false
};

function rootReducer(state = initialState, action) {
  if (action.type === USER_AUTHORISED) {
    return {
      ...state,
      isUserAuthorized: !state.isUserAuthorized
    };
  }

  return state;
}

export default rootReducer;
