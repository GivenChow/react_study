import { createStore, applyMiddleware } from 'redux';
import countReducer from './countReducer';
// 引入thunk支持异步action
import thunk from 'redux-thunk';
export default createStore(countReducer, applyMiddleware(thunk));
