import React from 'react'
import Note from './components/Note.js'
import notesData from './data/notesData.js'

export default class NoteApp extends React.Component {
  constructor() {
    super()
    this.state = {
      notes: notesData
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    alert("test")
  }

  render() {
    return (
      <>
        <h1>Notes App</h1>
        <br/>
        <br/>
        <input type="text" submit={() => {this.handleSubmit()}}/>
      </>
    )
  }
}