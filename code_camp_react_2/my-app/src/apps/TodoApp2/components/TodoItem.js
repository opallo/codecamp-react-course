import React from 'react'
import '../style.css'

export default function TodoItem(props) {

  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.checked} onChange={() => alert("cool")} />
      <p>{props.item.text}</p>
    </div>
  )

}