import React from 'react'
import styled, { css } from 'styled-components'


const Container = styled.div`
  margin: 0 15%;
`

const Intro = styled.h2`
  color: palevioletred;
  background-color: papayawhip;
  padding: 2rem;

  ${props =>
    props.primary && css`
      border-radius: 5px;
      border: 2px solid palevioletred;
  `};
`

export default function GreetingApp() {

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let seconds = date.getSeconds();
  var timeOfDay = '';
  var amPm = '';

  function addZero(time) {
    if (time < 10) {
      time = '0' + time
    }
  }

  function formatTime(time) {
    if (hours < 12) {
      timeOfDay = 'Morning'
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = 'Afternoon'
    } else {
      timeOfDay = 'Evening'
    }

    if (hours < 12) {
      amPm = 'am'
    } else {
      amPm = 'pm'
    }

    addZero(minutes)
    addZero(seconds)
  }

  formatTime(timeOfDay)

  return (
    <Container primary>
      <Intro primary>Opallo Collins - React.js Expert</Intro>
      <Container>
        <h3>Good {timeOfDay}! The time is: {hours % 12}:{minutes}:{seconds + ' ' + amPm}</h3>
        <h4>What Questions Do I Have About React.js?</h4>
        <ul className="questions-list">
          <li>1. How can I use React components to quickly and cleanly put together a website?</li>
          <li>2. What are props useful for?</li>
          <li>3. What unique applications can be made easily with React?</li>
        </ul>
      </Container>
    </Container>
  )
}