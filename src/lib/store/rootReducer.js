import { combineReducers } from "redux";
import accountReducer from "./account/accountSlice";
import settingsSlice from "./settings/settingsSlice";

const rootReducer = combineReducers({
  user: accountReducer,
  settings: settingsSlice,
});

export default rootReducer;
