import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import './index.css';
export default class List extends Component {
  state = {
    users: [],
    isFrist: true,
    isLoad: false,
    isError: '',
  };
  componentDidMount() {
    // 添加订阅
    this.token = PubSub.subscribe('add', (_, data) => {
      this.setState(data);
    });
  }
  componentWillUnmount() {
    // 取消订阅
    PubSub.unsubscribe(this.token);
  }
  render() {
    const { users, isFrist, isLoad, isError } = this.state;
    return (
      <div className="row">
        {
          //因为不能在JSX语法中使用if，只能是表达式，所以可以是有用三元运算符进行判断。
          isFrist ? (
            <h1>欢迎进入页面</h1>
          ) : isLoad ? (
            <h2>正在搜索页面</h2>
          ) : isError !== '' ? (
            <h1>{isError}</h1>
          ) : (
            users.map(el => {
              return (
                <div className="card" key={el.id}>
                  <a href={el.html_url} target="_blank" rel="noreferrer">
                    <img alt="headImg" src={el.avatar_url} style={{ width: '100px' }} />
                  </a>
                  <p className="card-text">{el.login}</p>
                </div>
              );
            })
          )
        }
      </div>
    );
  }
}
