const initialState = {
  activePage: 1,
  mobileOpen: false,
  drawerOpen: false
};

function appReducer(state = initialState, action) {
  if (action.type === "ACTIVE_PAGE") {
    return {
      ...state,
      activePage: action.activePage
    };
  }

  if (action.type === "MOBILE_OPEN") {
    return {
      ...state,
      mobileOpen: action.mobileOpen
    };
  }

  if (action.type === "OPEN_DRAWER") {
    return {
      ...state,
      drawerOpen: action.drawerOpen
    };
  }
  return state;
}

export default appReducer;
