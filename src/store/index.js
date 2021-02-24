import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import profile from "./reducers/profile"
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
  user: profile
});



const store = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
}


export default store();