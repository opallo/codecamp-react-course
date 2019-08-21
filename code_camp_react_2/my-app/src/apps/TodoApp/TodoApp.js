import React from 'react'
import TodoItem from './components/TodoItem.js'
import todoData from './data/todoData.js'

export default function MyApp() {

  const todoComponents = todoData.map(item => {
    return(
      <TodoItem key={item.id} item={item} checked={item.checked}/>
    )
  })

  return (
    <div>
      <div className="top-container">
        <h1 className="title">Todo List</h1>
      </div>
      <div className="list-container">   
        <ul>
          {todoComponents}     
        </ul>

      
      </div>
    </div>
  )
}