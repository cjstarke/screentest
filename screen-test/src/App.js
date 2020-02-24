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
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <Header score={this.state.score}/>
        <Container score={this.setScore}/>
      </div>)
  }
  
}
  
  
 
  // scoreChange = (event) => {
  //   this.setState((prevState) => ({
  //     score: prevState.score + event.target.value
  //   }))
  // }

  
    
   

  

export default App;
