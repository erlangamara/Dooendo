import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

//reducers
import habitReducer from './reducers/habitReducer';
import loginReducer from './reducers/loginReducer';

const reducer = combineReducers({
  habitReducer,
  loginReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;