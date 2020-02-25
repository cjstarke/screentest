import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'


class NewGame extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <h1>start game</h1>
        
          <Button
            value='easy'
            name='easy'
            onClick={this.props.api}>easy
          </Button>
       
       
          <Button
            value='medium'
            name='medium'
            onClick={this.props.api}>easy
          </Button>
     
      
          <Button
            value='difficult'
            name='hard'
            onClick={this.props.api}>hard
          </Button>
    
       
        
      </>
    )
  }
}
export default NewGame