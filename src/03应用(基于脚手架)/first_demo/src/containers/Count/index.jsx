import CountUI from '../../components/Count';
// 引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/countAction';
// 引入connect
import { connect } from 'react-redux';
// const mapStateToProps = state => ({ count: state });
// const mapDispatchToProps = dispatch => ({
//   add: val => {
//     dispatch(createIncrementAction(val));
//   },
//   addAsync: (val, time) => {
//     dispatch(createIncrementAsyncAction(val, time));
//   },
//   : val => {
//     dispatch(createDecrementAction(val));
//   },
// });
// 暴露容器组件
export default connect(state => ({ count: state }), {
  add: createIncrementAction,
  addAsync: createIncrementAsyncAction,
  sub: createDecrementAction,
})(CountUI);
