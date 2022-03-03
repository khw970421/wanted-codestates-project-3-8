import { combineReducers } from "redux";
import { getApiDataHandler } from "./dataReducer";

const rootReducer = combineReducers({
  apiData: getApiDataHandler,
});

export default rootReducer;