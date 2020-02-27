import React, {Component} from 'react';
import './App.css';
import Container from './components/Container'
import Header from './components/Header'
import { Link, Route, Switch } from 'react-router-dom'




class App extends Component { 
  constructor() {
    super() 
    this.state = {
      score: 0
    }
  }
  setScore = (number) => {
    this.setState((prevState) => ({
      score: prevState.score*1 + number*1
    }))
    console.log(`state score: ${this.state.score}`)
  }
  restartScore = () => {
    this.setState({
      score: 0
    })
  }
  render() {
    return (
      <div className="App">
        <Header score={this.state.score} restart={this.restartScore}/>
        <Container score={this.setScore} number={this.state.score} restart={this.restartScore}/>
      </div>)
  }
  
}
  
  
 
 

  
    
   

  

export default App;
