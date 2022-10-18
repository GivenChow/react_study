/**
 *
 * @param {*} preState 之前的状态
 * @param {*} action 动作对象
 */

export default function countReducer(preState = 0, action) {
  const { type, data } = action;
  switch (type) {
    case 'add':
      return preState + data;
    case 'sub':
      return preState - data;
    default:
      return preState;
  }
}
