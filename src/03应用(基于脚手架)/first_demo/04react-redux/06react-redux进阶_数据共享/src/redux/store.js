import { createStore, applyMiddleware, combineReducers } from 'redux';
import countReducer from './Reducers/count';
import personReducer from './Reducers/person';
// 引入thunk支持异步action
import thunk from 'redux-thunk';
const allReducer = combineReducers({ sum: countReducer, people: personReducer });
export default createStore(allReducer, applyMiddleware(thunk));
