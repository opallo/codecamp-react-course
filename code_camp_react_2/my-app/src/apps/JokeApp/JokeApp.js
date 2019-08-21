import React from 'react'
import Joke from './components/Joke'
import jokesData from './data/jokesData.js'

export default function JokeApp() {

  const jokeComponents = jokesData.map(joke => {
    return(
      <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
    )
  })

  return (
    <div>
      {jokeComponents}
    </div>
  )
}