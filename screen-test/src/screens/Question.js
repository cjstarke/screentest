import React, { Component } from 'react'
import Button from '../components/Button'
import ShuffleArr from '../components/ShuffleArr'
import Replace from '../components/Replace'

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      answers: ['hello'],
      id: 0,
      isloading: true,
      score: 0
      
    }
  }
  componentDidMount = () => {
    console.log(this.props)
  
    this.setState({
      questions: this.props.questions,
      id: this.props.match.params.id,
      isloading: this.props.loading,
      answers: undefined
      
    }) 
    console.log(`state id: ${this.state.id}`)
  }
  randomAnswer = () => {
    const thisQ = this.state.questions[this.state.id]
    const right = Replace(thisQ.correct_answer)
    const wrong = thisQ.incorrect_answers
    let firstAnswers = [ 
      {'ans': right, 'guess': 1},
      {'ans': Replace(wrong[0]), 'guess': 0},
      {'ans': Replace(wrong[1]), 'guess': 0},
      { 'ans': Replace(wrong[2]), 'guess': 0}
    ]
    const newanswers = ShuffleArr(firstAnswers)
    this.setState({
      answers: newanswers
    })
  
  }
  displayAnswers = (answers) => {
    return (
      <>
        <div>
          <Button
            name={answers[0].ans}
            value={answers[0].guess}
            onClick={this.onAnswer} 
            className= {`button${answers[0].guess}`}
          />
        </div>
        <div>
          <Button
            name={answers[1].ans}
            value={answers[1].guess}
            onClick={this.onAnswer} 
            className= {`button ${answers[1].guess}`}
          />
        </div>
        <div>
          <Button
            name={answers[2].ans}
            value={answers[2].guess}
            onClick={this.onAnswer}
            className= {`button ${answers[2].guess}`}
          />
        </div>
        <div>
          <Button
            name={answers[3].ans}
            value={answers[3].guess}
            onClick={this.onAnswer}
            className= {`button ${answers[3].guess}`}
          />
        </div>
      </>)
  }
  
  onAnswer = (e) => {
  
    const num = e.target.value
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
    console.log(this.state.questions)
    
    const { questions, id } = this.state
    const quest = parseInt(id) + 1
    console.log(id)
    if (this.state.answers === undefined) {
      
      this.randomAnswer()
    }
    
    return (
    
      
      <>
        {this.state.isloading || this.state.answers === undefined ? (<div>start over man</div>) : (<div>
          <h1>Question {quest}</h1>
          <h2>{Replace(questions[id].question)}</h2>
          <div>{this.displayAnswers(this.state.answers)}</div>
        </div>)}
        
          
        

      </>
    )
  }
}
export default Question