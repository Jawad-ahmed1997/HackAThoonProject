import { createStore, applyMiddleware } from "redux";
import loginReducer from "./Reducer/loginreducer";
import signupreducer from './Reducer/signUpreducer';
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const reducer = combineReducers({
  loginReducer,
  signupreducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
console.log(signupreducer)

export default store;