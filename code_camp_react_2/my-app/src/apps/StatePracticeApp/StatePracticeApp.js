import React from 'react'

export default class StatePracticeApp extends React.Component{
  constructor(){
    super()
    this.state = {
      name: "Opallo",
      age: 23
    }
  }

  render(){
    return(
      <>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
      </>
    )
  }
}