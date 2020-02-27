import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'


class NewGame extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount = () => {
    this.props.restart()
  }

  render() {
    return (
      <div className= 'newgame'>
        <div className='heading'>Welcome to</div>
        <div className='biglogo'>
          <img className='bigimage' src='https://i.imgur.com/43ehdKp.png' alt='logo'/>
        </div>
        <div className='subhead'>to start the test, choose a difficulty level below</div>
        <div className= 'startchoices'>
          <Button
            value='easy'
            className= 'start darkblue'
            name='easy'
            onClick={this.props.api}>easy
          </Button>
          <Button
            value='medium'
            name='medium'
            className='start yellow'
            onClick={this.props.api}>easy
          </Button>
          <Button
            value='hard'
            name='hard'
            className ='start lightblue'
            onClick={this.props.api}>hard
          </Button>
        </div>
      </div>
    )
  }
}
export default NewGame