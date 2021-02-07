import { applyMiddleware, createStore } from "redux";
import middlewares from "./middlewares";
import reducer from "./reducer";

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
