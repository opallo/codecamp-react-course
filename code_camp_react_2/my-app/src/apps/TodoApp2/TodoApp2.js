import React from 'react'
import TodoItem from './components/TodoItem.js'
import todoData from './data/todoData.js'
import './style.css'

export default class TodoApp2 extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
  }
  
  render() {

    let listItems = this.state.todos.map(item =>
      <TodoItem key={item.id} item = {item}/>
    )

    return (
      <>
        <div className="top-container">
          <h1 className="title">Todo List</h1>
        </div>
        <div className="list-container">
          {listItems}
        </div>
      </>
    )
  }
}