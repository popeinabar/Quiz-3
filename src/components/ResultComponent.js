import './result.css';
import React, { Component } from 'react'

export default class Resultcomponent extends Component {
  render() {
    return (
      <div className='_container'>
        <h2 id='result'>Result</h2>
        <div id='result-container'>
            <h3 id='head'>You need more practice!</h3>
            <h2 id='score-per'>Your Score is 20%</h2>
            <div id='result-component'>
                <div className='info'><h4>Total number of questions</h4> <h4>15</h4></div>
                <div className='info'><h4>Number of attempted questions</h4> <h4>9</h4></div>
                
                <div className='info'><h4>Number of correct questions</h4> <h4>3</h4></div>
                <div className='info'><h4>Number of wrong questions</h4> <h4>6</h4></div>
            </div>
        </div>
        <div id='result-button-div'>
            <button className='result-button' id='result-button-1'>Play Again</button>
            <button className='result-button' id='result-button-2'>Back To Home</button>
        </div>

      </div>
    )
  }
}