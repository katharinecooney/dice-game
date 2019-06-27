import React, { Component } from 'react'
import './Die.css';

class Die extends Component {
  



  render(){
    let dieFace = this.props.dieFace;
    let dice = `fas fa-dice-${dieFace} Die-icon`;
    return(
      <div className="Die">
        <i className={dice}></i>
      </div>
    )
  }
}

export default Die;