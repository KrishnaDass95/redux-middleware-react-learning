import { postReducer } from "./reducers/postReducer";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";



const store = createStore(postReducer, applyMiddleware(thunk));

export default store;