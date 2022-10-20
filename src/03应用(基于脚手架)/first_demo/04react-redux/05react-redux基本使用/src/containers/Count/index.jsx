import CountUI from '../../components/Count';
// 引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/countAction';
// 引入connect
import { connect } from 'react-redux';
function mapStateToProps(state) {
  return { count: state };
}
function mapDispatchToProps(dispatch) {
  return {
    add: val => {
      dispatch(createIncrementAction(val));
    },
    addAsync: (val, time) => {
      dispatch(createIncrementAsyncAction(val, time));
    },
    sub: val => {
      dispatch(createDecrementAction(val));
    },
  };
}
// 暴露容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
