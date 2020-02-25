import React, { Component } from 'react'
import '../App.css';


class Button extends Component{
  constructor(props) {
    super(props)
    this.state = {}
    
  }
  render() {
    return (
      <button
        value={this.props.value}
        name={this.props.name}
        onClick={this.props.onClick}
        className={this.props.className}
      >{this.props.name}</button>
    )
  }
  
}
export default Button