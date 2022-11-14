import { createStore, applyMiddleware } from 'redux';
import reducer from './Reducers';
// 引入thunk支持异步action
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
