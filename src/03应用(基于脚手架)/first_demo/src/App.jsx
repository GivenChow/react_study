import React, { Component } from 'react';
import { Button, DatePicker } from 'antd';
import { SearchOutlined, WechatOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;
export default class App extends Component {
  render() {
    //通过 ...将状态中的全部赋值过去
    return (
      <div>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <br />
        <WechatOutlined />
        <br />
        <DatePicker />
        <RangePicker />
      </div>
    );
  }
}
