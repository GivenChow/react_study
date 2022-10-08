import React, { Component } from 'react';
import helloStyle from './index.module.css';
export default class Hello extends Component {
  render() {
    return <h2 className={ helloStyle.title}>Hello React</h2>;
  }
}
