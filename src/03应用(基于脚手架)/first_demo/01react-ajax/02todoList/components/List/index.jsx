import React, { Component } from 'react'
import Item from '../Item';
import PropType from 'prop-types'
import './index.css'

export default class List extends Component {
   //对接收的参数做限制,限制不能为空以及参数的类型
    static propTypes = {
        todos:PropType.array.isRequired,
        show:PropType.func.isRequired,
        deleteById:PropType.func.isRequired,
    }
  render () {
    const {todos} = this.props;
    return (
      <ul className="todo-main">
          {
            todos.map((todo)=>{
                return <Item key = {todo.id} {...todo} createCheck = {this.props.show} deleteById = {this.props.deleteById} />
            })
          }
      </ul>
    )
  }
}
