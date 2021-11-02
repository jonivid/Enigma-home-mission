import { stat } from "fs";
import { ACTIONS, IAction } from "./actionConfig";
import { ICategory, ICorrency } from "./correncyAction";

const initCorrencyState = {
  correncies: [],
  categories: [],
};
interface IState {
  correncies: ICorrency[];
  categories: ICategory[];
}

export default function correncyReducer(
  state: IState = initCorrencyState,
  action: IAction
) {
  switch (action.type) {
    case ACTIONS.GET_ALL_CURRENCIES: {
      const { payload } = action;
      return { ...state, correncies: payload };
    }
    case ACTIONS.SET_CORRENCY_CATEGORIES_BUTTONS: {
      const { payload } = action;
      return { ...state, categories: [...payload] };
    }
    case ACTIONS.TOGGLE_STAR: {
      const { payload } = action;
      return { ...state, correncies: payload };
    }
    default: {
      return state;
    }
  }
}
