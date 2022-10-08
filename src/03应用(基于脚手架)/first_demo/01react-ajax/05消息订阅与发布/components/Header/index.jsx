import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import axios from 'axios';
export default class Header extends Component {
  search = () => {
    // 获取用户的输入
    const {
      KeyValue: { value: keyWord },
    } = this;
    console.log(keyWord);
    const add = 'add';
    PubSub.publish(add, { isFrist: false, isLoad: true });
    //在搜索之前设置,搜索的开始，结束第一次展示
    // this.props.updateAppState({ isFrist: false, isLoad: true });
    // 发送网络请求
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      response => {
        // this.props.updateAppState({ users: response.data.items, isLoad: false });
        PubSub.publish(add, { users: response.data.items, isLoad: false });
      },
      error => {
        // this.props.updateAppState({ isError: error.message, isLoad: false });
        PubSub.publish(add, { isError: error.message, isLoad: false });
      }
    );
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索GitHub用户</h3>
        <div>
          {/*使用ref拿到输入的数据，ref中使用回调函数的形式，在实例对象中创建一个KeyValue的属性，值是该节点*/}
          <input ref={c => (this.KeyValue = c)} type="text" placeholder="输入关键词进行搜索" />
          &nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
