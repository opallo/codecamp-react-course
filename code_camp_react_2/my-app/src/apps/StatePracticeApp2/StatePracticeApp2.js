import React from 'react'

export default class StatePracticeApp2 extends React.Component{
  constructor(){
    super()
    this.state = {
      isLoggedIn: true
    }
  }

  render(){
    return(
      <>
        <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
      </>
    )
  }
}