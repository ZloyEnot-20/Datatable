import { combineReducers } from "redux";
import currentUserReducer from "./currentUserReducer";
import dataReducer from "./dataReducer";
import dataStatusReducer from "./dataStatusReducer";
import stateReducer from "./statesReducer";

export const rootReducer = combineReducers({
  data: dataReducer,
  status: dataStatusReducer,
  currentUser: currentUserReducer,
  states: stateReducer,
});
