import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
export default class App extends Component {
  state = {
    users: [],
    isFrist: true,
    isLoad: false,
    isError: '',
  };
  saveUsers = stateObj => {
    this.setState(stateObj);
  };
  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <Header saveUsers={this.saveUsers}></Header>
        <List {...this.state}></List>
      </div>
    );
  }
}
