import React from "react";
import Score from './Score';
import AlphabetBoard from './AlphabetBoard';
import QuizBoard from './QuizBoard';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      word: 'APPLE',
      alphabet: {
        "A":false,
        "B":false,
        "C":false,
        "D":false,
        "E":false,
        "F":false,
        "G":false,
        "H":false,
        "I":false,
        "J":false,
        "K":false,
        "L":false,
        "M":false,
        "N":false,
        "O":false,
        "P":false,
        "Q":false,
        "R":false,
        "S":false,
        "T":false,
        "U":false,
        "V":false,
        "W":false,
        "X":false,
        "Y":false,
        "Z":false,
      },
    };
  }

  handleClick = (letter) => {
    const alphabet = { ...this.state.alphabet, [letter]: !this.state.alphabet.[letter] }
    this.setState({ alphabet });
  }

  render() {
    return (
      <div className="game">
        <Score score={this.state.score} />
        <QuizBoard word={this.state.word} alphabet={this.state.alphabet}/>
        <AlphabetBoard alphabet={this.state.alphabet} onClick={this.handleClick} />
      </div>
    );
  }
}

export default Game;