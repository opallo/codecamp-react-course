import React from 'react'

class StateApp extends React.Component {
  constructor() {
    super()
    this.state = {
      question: "Is state important to know?",
      answer: "Yes"
    }
  }

  render() {
    
    return (
      <>
        <h1>Question: {this.state.question}</h1>
        <h2>Answer: {this.state.answer} </h2>
      </>
    )
  }

}

export default StateApp