import React, { Component } from 'react'
import Button from '../components/Button'
import ShuffleArr from '../components/ShuffleArr'
import Replace from '../components/Replace'
import { Link, Route, Switch, Redirect, } from 'react-router-dom'




class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      answers: ['hello'],
      id: 0,
      isloading: true,
      score: 0,
      gotapi: false,
    }
  }

  componentDidMount = () => {
    console.log(this.props.api)
    console.log('hello')
    console.log(this.props.location)
    this.setState({
      questions: this.props.questions,
      id: this.props.match.params.id,
      isloading: this.props.loading,
      answers: undefined,
      gotapi: this.props.api
    }) 
    console.log(`state id: ${this.state.id}`)
  }
  randomAnswer = () => {
    const thisQ = this.state.questions[this.state.id]
    const right = Replace(thisQ.correct_answer)
    const wrong = thisQ.incorrect_answers
    let firstAnswers = [ 
      {'ans': right, 'guess': 1, 'color': '', 'number': 1},
      {'ans': Replace(wrong[0]), 'guess': 0, 'color': '', 'number': 2},
      {'ans': Replace(wrong[1]), 'guess': 0, 'color': '', 'number': 3},
      { 'ans': Replace(wrong[2]), 'guess': 0, 'color': '', 'number': 4}
    ]
    const newanswers = ShuffleArr(firstAnswers)
    this.setState({
      answers: newanswers
    })
    console.log(`state answers: ${newanswers}`)
  
  }
  displayAnswers = (answers) => {
    console.log('display answers')
    return (
      <>
        
          <Button
            name={answers[0].ans}
            value={answers[0].guess}
            onClick={this.onAnswer} 
            color={answers[0].color}
            className={`button answer ${answers[0].guess} darkblue`}
            style={{ backgroundColor: this.state.answers[0].color }}
            number= {answers[0].number}
            
          />
       
        
          <Button
            name={answers[1].ans}
            value={answers[1].guess}
            onClick={this.onAnswer} 
            color={answers[1].color}
            className={`button answer ${answers[1].guess} yellow`}
            style={{ backgroundColor: this.state.answers[1].color}}
            number= {answers[1].number}
          />
        
          <Button
            name={answers[2].ans}
            value={answers[2].guess}
            onClick={this.onAnswer}
            color={answers[2].color}
            className={`button answer ${answers[2].guess} lightblue`}
            style={{ backgroundColor: this.state.answers[2].color}}
            number={answers[2].number}
          />
        
          <Button
            name={answers[3].ans}
            value={answers[3].guess}
            onClick={this.onAnswer}
            color={answers[3].color}
            className={`button answer ${answers[3].guess} lightgreen`}
            style={{ backgroundColor: this.state.answers[3].color }}
            number= {answers[3].number}
          />
        
      </>)
  }
  
  onAnswer = (e) => {
    const num = e.target.value
    for (let index = 0; index <= 3; index++) {
      if (this.state.answers[index].guess === 1) {
        let  answers = {...this.state.answers}
        answers[index].color = 'green'
        this.setState({answers})
      } 
    }
    this.props.score(num)
    const oldid = parseInt(this.props.match.params.id)
    const newid = (oldid + 1)
    console.log(newid)
    console.log(e.target.value)
    if (newid < 5) {
      setTimeout(() => {
        this.setState({
          id: newid
        })
        this.props.history.push(`/questions/${newid}`)
        this.componentDidMount()
      }, 1500);
    } else {
      setTimeout(() => {
        this.setState({
          id: 0
        })
        this.props.history.push(`/finalscreen`)
      }, 2000);
    }
  }
  
  render() {
    console.log(this.state.gotapi)
    const { questions, id } = this.state
    const quest = parseInt(id) + 1
    if (this.state.answers === undefined && this.state.gotapi === true) {
      this.randomAnswer()
    }
    const dead = 0
    return (
      <div className='question'>
        {this.state.isloading || this.state.answers === undefined  ? (<div>start over man</div>) : (<>
          <div className='subhead'>Question {quest}</div>
          <div className='subsubhead'>{Replace(questions[id].question)}</div>
          <div className='answers'>{this.displayAnswers(this.state.answers)}</div>
        </>)}
      </div>
    )
  }
}
export default Question