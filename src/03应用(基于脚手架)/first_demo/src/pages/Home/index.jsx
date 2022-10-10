import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import News from './News';
import Message from './Message';
export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              {/* react中路由的注册是有顺序的，因此在匹配的时候也是按照这个顺序进行的，因此会先匹配父组件中的路由 */}
              <NavBar to="/home/news">News</NavBar>
            </li>
            <li>
              <NavBar to="/home/message">Message</NavBar>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/message" />
          </Switch>
        </div>
      </div>
    );
  }
}
