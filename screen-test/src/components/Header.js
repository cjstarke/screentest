import React, { Component } from 'react'


class Header extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      score : 0
    }
  } 
  render() {
    return (
      <div>
        <div>Score: {this.props.score}</div>
      </div>)

  }
}
export default Header