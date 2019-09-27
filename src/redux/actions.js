/*
 * action types
 */

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const MAXCOUNTER = "MAX_COUNTER";
export const MINCOUNTER = "MIN_COUNTER";
export const AUTH_USER_SET = "AUTH_USER_SET";
export const ACTIVE_PAGE = "ACTIVE_PAGE";
export const MOBILE_OPEN = "MOBILE_OPEN";
export const OPEN_DRAWER = "OPEN_DRAWER";

/*
 * action creators
 */

export function incrementCounter(payload) {
  return { type: INCREMENT, payload };
}

export function decrementCounter(payload) {
  return { type: DECREMENT, payload };
}

export function maxCounter() {
  return { type: MAXCOUNTER };
}

export function minCounter() {
  return { type: MINCOUNTER };
}

export function setAuthorization(authUser) {
  return { type: AUTH_USER_SET, authUser };
}

export function setActivePage(activePage) {
  return { type: ACTIVE_PAGE, activePage };
}

export function setMobileOpen(mobileOpen) {
  return { type: MOBILE_OPEN, mobileOpen };
}

export function setDrawerOpen(drawerOpen) {
  return { type: OPEN_DRAWER, drawerOpen };
}
