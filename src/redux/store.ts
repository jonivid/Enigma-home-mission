import { createStore, compose } from "redux";
import currencyReducer from "./currencyReducer";
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(currencyReducer, composeEnhancers());
