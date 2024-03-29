import React from 'react'
import ReactDOM from 'react-dom'

// Task: Convert these functional components to class-based components. Complete this in ClassSolution.js

// #1
function App(){
  return(
    <div>
      <Header />
      <Greeting />
    </div>
  )
}

// #2
function Header(props){
  return(
    <header>
      <p>Welcome, {props.username}</p>
    </header>
  )
}

// #3
function Greeting(){
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12){
    timeOfDay = "morning"
  }else if(hours > 12 && hours < 17){
    timeOfDay = "afternoon"
  }else{
    timeOfDay = "evening"
  }

  return(
    <h1>Good {timeOfDay} to you, sir!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))