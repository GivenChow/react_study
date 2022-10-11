import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Detail from './Detail';
export default class Message extends Component {
  state = {
    messageArr: [
      {
        id: 1,
        title: '消息一',
      },
      {
        id: 2,
        title: '消息二',
      },
      {
        id: 3,
        title: '消息三',
      },
    ],
  };
  replaceShow = (id, title) => {
    // replace跳转+携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`);
    // replace跳转+携带search参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`);
    // replace跳转+携带state参数
    this.props.history.replace(`/home/message/detail`, { id, title });
  };
  pushShow = (id, title) => {
    // push跳转+携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`);
    // replace跳转+携带search参数
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`);
    // replace跳转+携带state参数
    this.props.history.push(`/home/message/detail`, { id, title });
  };

  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map(el => {
            return (
              <li key={el.id}>
                {/* 向路由组件传params参数 */}
                {/* <Link to={`/home/message/detail/${el.id}/${el.title}`}>{el.title}</Link> */}
                {/*  向路由组件传search参数*/}
                {/* <Link to={`/home/message/detail/?id=${el.id}&title=${el.title}`}>{el.title}</Link> */}
                {/*  向路由组件传state参数*/}
                <Link to={{ pathname: '/home/message/detail', state: { id: el.id, title: el.title } }}>{el.title}</Link>
                &nbsp;
                <button
                  onClick={() => {
                    this.pushShow(el.id, el.title);
                  }}
                >
                  push查看
                </button>
                &nbsp;
                <button
                  onClick={() => {
                    this.replaceShow(el.id, el.title);
                  }}
                >
                  replace查看
                </button>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path={'/home/message/detail/:id/:title'} component={Detail} /> */}
        {/* 声明接收search参数，正常注册路由即可 */}
        {/* <Route path={'/home/message/detail'} component={Detail} /> */}
        {/* 声明接收state参数，正常注册路由即可 */}
        <Route path={'/home/message/detail'} component={Detail} />
      </div>
    );
  }
}
