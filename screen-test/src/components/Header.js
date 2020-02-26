import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      score : 0
    }
  } 
  render() {
    return (
      <div className='header'>
        
        <div>Screen Test</div>
        <Link to= '/' onClick={this.props.restart}>
          New Game
        </Link>
        <div>Score: {this.props.score}</div>
      </div>)

  }
}
export default Header