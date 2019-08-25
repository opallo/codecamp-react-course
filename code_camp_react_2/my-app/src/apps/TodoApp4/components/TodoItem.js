import React from 'react'

export default function TodoItem(props) {

  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.checked} onChange={() => props.handleChange(props.item.id)} />
      <p>{props.item.name}</p>
    </div>
  )
}
