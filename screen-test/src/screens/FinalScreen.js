import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import '../components/Container.css'


function FinalScreen(props) {
  const finalscore = props.score
  console.log(finalscore)
  return (
    <div>
      <div>Congrats you got <span>{finalscore}</span> out of 10</div>
      <Link to= '/' onClick = {props.restart}>
        Play Again 
      </Link>
      
    </div>)
}
export default FinalScreen