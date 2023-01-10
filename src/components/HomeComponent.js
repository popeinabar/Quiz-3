import './home.css';

import React, { Component } from 'react'

export default class HomeComponent extends Component {
  render() {
    return (
      <div className='ac'>
        <h2>Quiz App</h2>
        <button id='play'>Start</button>
      </div>
    )
  }
}