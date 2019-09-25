/*
 * action types
 */

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const MAXCOUNTER = "MAX_COUNTER";
export const MINCOUNTER = "MIN_COUNTER";
export const AUTH_USER_SET = "AUTH_USER_SET";

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
