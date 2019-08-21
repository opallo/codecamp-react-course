import React from 'react'

export default function Joke(props){

  return(
  <div className="joke-card">

    <div className="joke-content">{!(props.question == null) && props.question}</div>

    <div style = {{color: !props.question && "teal"}}className="joke-content">{props.punchline}</div>

  </div>
  )

}