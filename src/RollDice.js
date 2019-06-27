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
    });
    // wait one second, then reset isRolling to false
    setTimeout(() => {
      this.setState({isRolling: false})
    }, 1000);
  }

  render(){

    return(
      <div className="RollDice">
        <div className="RollDice-diceContainer">
          <Die dieFace={this.state.die1} rolling={this.state.isRolling}/>
          <Die dieFace={this.state.die2} rolling={this.state.isRolling}/>
        </div>
        <button 
          className="RollDice-button" 
          onClick={this.roll}
          disabled={this.state.isRolling}>
            {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    )
  }
}

export default RollDice;