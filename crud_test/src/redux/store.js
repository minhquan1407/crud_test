import React from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";

const store = createStore(
  authReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
