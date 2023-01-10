import './quiz.css';
import React, { Component } from 'react'
import  customData from "./questions.json";

export default class Quizcomponent extends Component {
  constructor(){
    super();
    this.state={
        currentQuestion:0,
    }
}

changeQuestion(isForward){
    this.setState((prevState)=>{
        let comingQuestion=prevState.currentQuestion;
        comingQuestion=isForward?comingQuestion+1:comingQuestion-1;
        if(comingQuestion<0){
            comingQuestion=0;
        }
        else if(comingQuestion>14){
            comingQuestion=14;
        }
        return {
            currentQuestion: comingQuestion,
        };
    })
}

quit(){
  alert("Are you sure you want to quit?")
  window.location.reload();
}
  render() {
    let data = customData[this.state.currentQuestion];
    return (
      <div className='container'>
        <div id='quistion-container'>
            <h2 id='ques-head'>Question</h2>
            <p id='question-number'>{this.state.currentQuestion+1} of 15</p>
            <p id='question'>{data.question}</p>
            <div className='option-div'>
                <div className='options'>{data.optionA}</div>
                <div className='options'>{data.optionB}</div>
                <div className='options'>{data.optionC}</div>
                <div className='options'>{data.optionD}</div>
            </div>
            <div className='button-div'>
                <button className='butt' id='button1' onClick={()=>this.changeQuestion(false)}>Previous</button>
                <button className='butt' id='button2' onClick={()=>this.changeQuestion(true)}>Next</button>
                <button className='butt' id='button3' onClick={()=>this.quit()}>Quit</button>
            </div>
        </div>

      </div>
    )
  }
}