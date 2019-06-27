import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
  static defaultProps = {
    dice: ['one', 'two', 'three', 'four', 'five', 'six']
  }
  
  constructor(props){
    super(props);
    this.state = {
      isRolling: false,
      die1: null,
      die2: null
    }
  }

  roll = () => {
    let randomIndex1 = Math.floor(Math.random() * this.props.dice.length);
    let randomIndex2 = Math.floor(Math.random() * this.props.dice.length);
    this.setState({
      die1: this.props.dice[randomIndex1],
      die2: this.props.dice[randomIndex2]
    })
    ;
  }

  render(){

    return(
      <div>
        <h1>{this.state.die1}</h1>
        <h1>{this.state.die2}</h1>
        <Die dieFace={3}/>
        <Die />
        <button onClick={this.roll}>Roll Dice</button>
      </div>
    )
  }
}

export default RollDice;