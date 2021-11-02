import { stat } from "fs";
import { ACTIONS, IAction } from "./actionConfig";
import { ICategory, ICurrency } from "./currencyAction";

const initCurrencyState = {
  currencies: [],
  categories: [],
};
interface IState {
  currencies: ICurrency[];
  categories: ICategory[];
}

export default function currencyReducer(
  state: IState = initCurrencyState,
  action: IAction
) {
  switch (action.type) {
    case ACTIONS.GET_ALL_CURRENCIES: {
      const { payload } = action;
      return { ...state, currencies: payload };
    }
    case ACTIONS.SET_CURRENCY_CATEGORIES_BUTTONS: {
      const { payload } = action;
      return { ...state, categories: [...payload] };
    }
    case ACTIONS.TOGGLE_STAR: {
      const { payload } = action;
      return { ...state, currencies: payload };
    }
    default: {
      return state;
    }
  }
}
