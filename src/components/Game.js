import React from "react";
import * as R from 'ramda';
import Button from './Button';
import AlphabetBoard from './AlphabetBoard';
import QuizBoard from './QuizBoard';
import WordList from './WordList';
import WordsInput from './WordsInput';


const isNotEmpty = (val) => {
  return !R.isEmpty(val);
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      words: [],
      word: '',
      alphabet: {},
      showWordList: false
    };
  }

  randomNewWord = (words) => {
    const random = getRandomInt(words.length);
    const word = words[random];
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

  handleWordList = () => {
    const showWordList = !this.state.showWordList
    this.setState({ showWordList });
  }

  updateWords = (input) => {
    input = R.split('\n', R.trim(input)); //split by new line
    input = R.filter(isNotEmpty, input); //remove empty line
    const words = R.map(R.toUpper(), input); //use upperclass

    this.setState({ words });
    this.randomNewWord(words);
  }

  render() {
    if(R.isEmpty(this.state.words)) {
      return (
        <WordsInput updateWords={this.updateWords}/>
      );
    } else {
      return (
        <div className="game">
          <QuizBoard word={this.state.word} alphabet={this.state.alphabet}/>
          { this.state.finished &&
            <Button value="Next" className="next-btn" onClick={() => this.randomNewWord(this.state.words)}/>
          }
          <AlphabetBoard alphabet={this.state.alphabet} onClick={this.handleClick} />
          <WordList
            showWordList={this.state.showWordList}
            onClick={this.handleWordList}
            words={this.state.words}
          />
        </div>
      );
    }
  }
}

export default Game;