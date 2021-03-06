import React, { Component } from 'react'
import Question from '../screens/Question'
import NewGame from '../screens/NewGame'
import { Route,  Redirect } from 'react-router-dom'
import FinalScreen from '../screens/FinalScreen'
import { API_URL } from '../constants'
import axios from 'axios'
import "./Container.css"
import './Header.css'

const api = API_URL

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      answers: [],
      isloading: true,
      gotapi: false
    }
  }
  restartGame = () => {
    this.props.restart()
    this.setState({
      questions: [],
      answers: [],
      isloading: true 
    })
  }

  getApi = async (e) => {
    const level = e.target.value
 
    try {
      const response = await axios.get(`${api}${level}`)
      this.setState({
        questions: response.data.results,
        isloading: false,
        gotapi: true
      })
      
    } catch (error) {
      console.log(error)
    }
  }
  

  render() {
    
    return (
      <div className= 'contain'>
        <Route
            exact path={"/"}
          render={(props) => <NewGame api={this.getApi}{...props} restart={this.restartGame}/> }
        />
         <Route
          exact path={"/finalscreen"}
          render={(props) => <FinalScreen score={this.props.number} restart={this.restartGame}{...props} />}
        />
        <Route
           path={"/questions/:id"}
          render={(props) => <Question api={this.state.gotapi} score={this.props.score} questions={this.state.questions} loading={this.state.isloading} answers={this.state.answers}{...props}/> }
        />
        { this.state.isloading ? (<></>): (<Redirect to = "/questions/0" />)
          
        }
      </div>
    )
  }
}
export default Container