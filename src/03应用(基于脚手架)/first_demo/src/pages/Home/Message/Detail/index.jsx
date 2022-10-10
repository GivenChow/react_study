import React, { Component } from 'react';
const detailData = [
  { id: 1, content: '你好，123' },
  { id: 2, content: '你好，456' },
  { id: 3, content: '你好，789' },
];
export default class Detail extends Component {
  render() {
    const { title, id } = this.props.match.params;
    const findRes = detailData.find(el => {
      return el.id == id;
    });
    return (
      <div>
        <ul>
          <li>ID：{id}</li>
          <li>TITLE：{title}</li>
          <li>CONTENT：{findRes.content}</li>
        </ul>
      </div>
    );
  }
}
