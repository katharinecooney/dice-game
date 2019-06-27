import React, { Component } from 'react'
import './Die.css';

class Die extends Component {
  



  render(){
    let dieFace = this.props.dieFace;
    let dice = `fas fa-dice-${dieFace}`;
    return(
      <i className={dice}></i>
    )
  }
}

export default Die;