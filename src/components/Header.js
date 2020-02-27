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
        
        <div className='logodiv head'>
          <img src='https://i.imgur.com/w6JVp8u.png' alt='logo' className= 'logo'/>
        </div>
        <div className='headerright'>
          <div>
            <Link to= '/' onClick={this.props.restart}>New Game</Link>
          </div>
          <div className= 'head' >Score: {this.props.score}</div>
        </div>
        
        
      </div>)

  }
}
export default Header