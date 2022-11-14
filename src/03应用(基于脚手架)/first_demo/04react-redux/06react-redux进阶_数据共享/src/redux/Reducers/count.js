/**
 *
 * @param {*} preState 之前的状态
 * @param {*} action 动作对象
 */
import { INCREMENT, DECREMENT } from '../constant';
export default function countReducer(preState = 0, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}
