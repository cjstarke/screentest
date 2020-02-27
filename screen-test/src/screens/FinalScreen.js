import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import '../components/Container.css'


function FinalScreen(props) {
  const finalscore = props.score
  console.log(finalscore)
  function guess() {
    if (finalscore < 2) {
      return (<>Thats terrible!</>)
    } else if (finalscore < 5) {
      return (<>Not too shabby!</>)
    }
    return (<>Great Job! Go Outside!</>)
  }
  return (
    <div className= 'finalscreen'>
      <div className= 'heading'>You got  <span>{finalscore}</span> out of 5!</div>
      <div className='subhead guess'>{guess()}</div>
      <div className= 'linkdiv'>
      <Link to='/' onClick={props.restart}>
        <button className= 'playagain'> Play Again</button>
      </Link>
      </div>
      
      
    </div>)
}
export default FinalScreen