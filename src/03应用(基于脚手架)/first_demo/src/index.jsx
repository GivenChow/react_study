import React from 'react';
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
const root = createRoot(document.getElementById('root'));
root.render(
  // 让app的所以子组件都能接收store
  <Provider store={store}>
    <App />
  </Provider>
);
// store.subscribe(() => {
//   root.render(<App />);
// });
// ReactDOM.render(<App />, document.getElementById('root'))
