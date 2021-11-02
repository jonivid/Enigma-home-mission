import { ACTIONS } from "./actionConfig";

export interface ICurrency {
  name?: string;
  value?: number;
  change?: number;
  amount?: number;
  category?: string;
  isStarOn?: boolean;
}
export interface ICategory {
  name?: string;
  isActive?: boolean;
}

export function getAllCurrencies(payload: any) {
  return {
    type: ACTIONS.GET_ALL_CURRENCIES,
    payload,
  };
}
export function setCategoriesList(payload: any) {
  return {
    type: ACTIONS.SET_CURRENCY_CATEGORIES_BUTTONS,
    payload,
  };
}
export function toggleStar(payload: number) {
  return {
    type: ACTIONS.TOGGLE_STAR,
    payload,
  };
}
