import React from 'react'
import TodoItem from './components/TodoItem.js'
import todoData from './data/todoData.js'
import './style.css'

export default class TodoApp4 extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.checked = !todo.checked
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    let todoItems = this.state.todos.map(item => {
      return (
        <TodoItem key={item.id} checked={item.checked} name={item.text}handleChange={this.handleChange} />
      )
    })

    return (
      <>
        <div className="top-container">
          <h1 className="title">Todo-App</h1>
        </div>
        <div className="list-container">
          {todoItems}
        </div>
      </>
    )
  }
}