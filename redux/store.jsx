import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
// middleware
import logger from "redux-logger";
import thunk from "redux-thunk";
// import the reducers
import rootReducer from "./reducers";

const middleware = [thunk, logger];
const makeStore = (context) =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export const wrapper = createWrapper(makeStore, { debug: true });
