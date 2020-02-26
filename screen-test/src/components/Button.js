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
        color={this.props.color}
        name={this.props.name}
        onClick={this.props.onClick}
        className={this.props.className}
        style={this.props.style}
        number={this.props.number}
      >{this.props.name}</button>
    )
  }
  
}
export default Button