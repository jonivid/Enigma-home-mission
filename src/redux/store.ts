import { createStore, compose } from "redux";
import correncyReducer from "./correncyReducer";
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(correncyReducer, composeEnhancers());
