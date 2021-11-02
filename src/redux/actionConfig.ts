export interface IAction {
  type: string; // what am i doing
  payload: any; // what am i sending
}

export const ACTIONS = {
  GET_ALL_CURRENCIES: "GET_ALL_CURRENCIES",
  SET_CORRENCY_CATEGORIES_BUTTONS: "SET_CORRENCY_CATEGORIES_BUTTONS",
  TOGGLE_STAR: "TOGGLE_STAR",
};
