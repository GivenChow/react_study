import React, { Component } from 'react';
const detailData = [
  { id: 1, content: '你好，123' },
  { id: 2, content: '你好，456' },
  { id: 3, content: '你好，789' },
];
export default class Detail extends Component {
  render() {
    // 接收params参数
    // const { title, id } = this.props.match.params;
    // 接收search参数
    // let { search } = this.props.location;
    // search = search.replace('?', '');
    // let arr = search.split('&');
    // let obj = {};
    // arr.forEach(function (item) {
    //   //每一项元素，再根据=号字符 打散成数组
    //   let kv = item.split('=');
    //   //每次向对象里面添加 属性和属性值
    //   obj[kv[0]] = kv[1];
    // });
    // const { id, title } = obj;
    // console.log(obj);
    // 接收state参数
    const { id, title } = this.props.location.state || {};
    const findRes =
      detailData.find(el => {
        return el.id == id;
      }) || {};
    return (
      <div>
        <ul>
          <li>ID：{id}</li>
          <li>TITLE：{decodeURI(title)}</li>
          <li>CONTENT：{findRes?.content}</li>
        </ul>
      </div>
    );
  }
}
