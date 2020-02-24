import React, { Component } from 'react'
import Question from '../screens/Question'
import NewGame from '../screens/NewGame'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import { API_URL } from '../constants'
import axios from 'axios'

const api = API_URL

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      answers: [],
      isloading: true
    }
  }

  getApi = async (e) => {
    const level = e.target.value
    console.log(level)
   
    try {
      const response = await axios.get(`${api}${level}`)
      console.log(response.data.results)
      this.setState({
        questions: response.data.results,
        isloading: false
      })
      
    } catch (error) {
      console.log(error)
    }
  }
  

  render() {
    
    return (
      <>
        <Route
            exact path={"/"}
          render={(props) => <NewGame api={this.getApi}{...props}/> }
          />
        <Route
           path={"/questions/:id"}
          render={(props) => <Question  score={this.props.score} questions={this.state.questions} loading={this.state.isloading} answers={this.state.answers}{...props}/> }
        />
        { this.state.isloading ? (<></>): (<Redirect to = "/questions/0" />)
          
        }
      </>
    )
  }
}
export default Container