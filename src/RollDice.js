import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  static defaultProps = {
    dice: ['one', 'two', 'three', 'four', 'five', 'six']
  }
  
  constructor(props){
    super(props);
    this.state = {
      isRolling: false,
      die1: this.props.dice[0],
      die2: this.props.dice[0]
    }
  }

  roll = () => {
    let randomIndex1 = Math.floor(Math.random() * this.props.dice.length);
    let randomIndex2 = Math.floor(Math.random() * this.props.dice.length);
    this.setState({
      isRolling: true,
      die1: this.props.dice[randomIndex1],
      die2: this.props.dice[randomIndex2]
    })
    ;
  }

  render(){

    return(
      <div className="RollDice">
        <div className="RollDice-diceContainer">
          <Die dieFace={this.state.die1}/>
          <Die dieFace={this.state.die2}/>
        </div>
        <button className="RollDice-button" onClick={this.roll}>Roll Dice</button>
      </div>
    )
  }
}

export default RollDice;