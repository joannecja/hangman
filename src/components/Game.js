import React from "react";
import * as R from 'ramda';
import Score from './Score';
import NextButton from './NextButton';
import AlphabetBoard from './AlphabetBoard';
import QuizBoard from './QuizBoard';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      finished: false,
      words: ['APPLE', 'BANANA', 'ORANGE', 'GRAPE', 'COCONUT', 'MANGO', 'AVOCADO'],
      word: '',
      alphabet: {},
    };
  }

  randomNewWord = () => {
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * Math.floor(max));
    }
    const random = getRandomInt(this.state.words.length);
    const word = this.state.words[random];
    const alphabet = {
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
    };
    const finished = false;
    this.setState({alphabet, word, finished});
  }

  componentDidMount() {
    this.randomNewWord();
  }

  componentDidUpdate() {
    if(!this.state.finished){
      let finished = true;

      // split word into array, sorting by letter (since dropRepeats can only drop consecutively repeating)
      // then drop repeats
      let letters = R.dropRepeats(R.split('', this.state.word).sort());
      letters.forEach((letter) => {
        let show = (this.state.alphabet.[letter]) ? true : false;
        if(!show){ // if any correct letter not show up, keep playing
          finished = false;
          return false;
        }
      });

      if(finished) { // if finished, show next button
        this.setState({ finished });
      }
    }
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
        {this.state.finished && <NextButton onClick={this.randomNewWord}/>}
        <AlphabetBoard alphabet={this.state.alphabet} onClick={this.handleClick} />
      </div>
    );
  }
}

export default Game;