import React from 'react'

//export default function App(){
//  return(
//      <div>{props.whatever}</div>
//    )
//}

class App extends React.Component{

  yourMethodHere(){
    
  }

  render(){
    return(
      // In classes, you must remember to write the 'this' keyword when working with props!vvv
      <div>{this.props.text}</div>
    )
  }
}

export default App