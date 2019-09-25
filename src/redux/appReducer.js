const initialState = {
  activePage: 0
};

function appReducer(state = initialState, action) {
  if (action.type === "ACTIVE_PAGE") {
    return {
      ...state,
      activePage: action.activePage
    };
  }
  return state;
}

export default appReducer;
