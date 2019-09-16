/*
 * action types
 */

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const MAXCOUNTER = "MAX_COUNTER";
export const MINCOUNTER = "MIN_COUNTER";
export const USER_AUTHORISED = "USER_AUTHORISED";

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

export function setAuthorization(payload) {
  return { type: USER_AUTHORISED, payload };
}
