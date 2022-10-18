import { INCREMENT, DECREMENT } from './constant';
// 同步action
export const createIncrementAction = data => ({ type: INCREMENT, data });
export const createDecrementAction = data => ({ type: DECREMENT, data });
// 异步action
export const createIncrementAsyncAction = (data, timer) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, timer);
  };
};
