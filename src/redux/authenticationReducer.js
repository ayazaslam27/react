import { AUTH_USER_SET } from "./actions";

const initialState = {
  authUser: {}
};

function rootReducer(state = initialState, action) {
  if (action.type === AUTH_USER_SET) {
    return {
      ...state,
      authUser: action.authUser
    };
  }

  return state;
}

export default rootReducer;
