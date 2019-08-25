import React from 'react'

export default class SetStateApp extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }

    this.addOne = this.addOne.bind(this)
    this.subtractOne = this.subtractOne.bind(this)
    this.doubleNumber = this.doubleNumber.bind(this)
    this.halfNumber = this.halfNumber.bind(this)
  }

  addOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  subtractOne(){
    this.setState(prevState => {
      return{
        count: prevState.count - 1
      }
    })
  }

  doubleNumber(){
    this.setState(prevState => {
      return {
        count: prevState.count * 2,
      }
    })
  }

  halfNumber(){
    this.setState(prevState => {
      return {
        count: prevState.count / 2,
      }
    })
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.addOne}>Add 1</button>
        <br/>
        <br/>
        <button onClick={this.subtractOne}>Subtract 1</button>
        <br/>
        <br/>
        <button onClick={this.doubleNumber}> Double</button>
        <br/>
        <br/>
        <button onClick={this.halfNumber}> Half</button>
      </>
    )
  }
}