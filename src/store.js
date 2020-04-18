import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialSate = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialSate,composeWithDevTools(
    applyMiddleware(...middleware))
);


export default store;
