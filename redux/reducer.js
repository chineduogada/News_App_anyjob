import { combineReducers } from "redux";
import newsReducer from "./news/newsReducer";

const reducer = combineReducers({
  news: newsReducer,
});

export default reducer;
