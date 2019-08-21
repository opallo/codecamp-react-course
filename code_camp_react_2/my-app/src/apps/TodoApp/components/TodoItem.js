import React from 'react'

export default function TodoItem(props){
  
  return(
    <div className="todo-item">    
      <input type="checkbox" defaultChecked={props.item.checked}/>
      <p>{props.item.text}</p>
    </div>
  )
  
}