import React from 'react';
import { ANSWERS } from '../assets/answers';
import Button from './Button';
import Word from './Word';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      finish: 0,
      answers: [
        {"letter":"T","status":"answer-hide"},
        {"letter":"E","status":"answer-hide"},
        {"letter":"S","status":"answer-hide"},
        {"letter":"T","status":"answer-hide"},
        {"letter":"E","status":"answer-hide"},
        {"letter":"R","status":"answer-hide"},
      ],
      letters: [
        {"letter":"A","show":true},
        {"letter":"B","show":true},
        {"letter":"C","show":true},
        {"letter":"D","show":true},
        {"letter":"E","show":true},
        {"letter":"F","show":true},
        {"letter":"G","show":true},
        {"letter":"H","show":true},
        {"letter":"I","show":true},
        {"letter":"J","show":true},
        {"letter":"K","show":true},
        {"letter":"L","show":true},
        {"letter":"M","show":true},
        {"letter":"N","show":true},
        {"letter":"O","show":true},
        {"letter":"P","show":true},
        {"letter":"Q","show":true},
        {"letter":"R","show":true},
        {"letter":"S","show":true},
        {"letter":"T","show":true},
        {"letter":"U","show":true},
        {"letter":"V","show":true},
        {"letter":"W","show":true},
        {"letter":"X","show":true},
        {"letter":"Y","show":true},
        {"letter":"Z","show":true},
      ],
    };
  }

  renderButton(letter, i) {
    if (!letter.show) {
      return;
    }
    return <Button key={letter.letter} value={letter.letter} onClick={ () => { this.checkAnswer(i) } } />;
  }

  renderWord(answer, status, i) {
    return <Word key={i} value={answer} status={status} />;
  }

  checkAnswer(i) {
    let finish = this.state.finish;
    const answers = this.state.answers;
    if (finish === answers.length) {
      return;
    }

    const letter = this.state.letters[i];
    letter.show = false;
    let letterChar = letter.letter;

    let answered = false;
    let score = this.state.score;
    this.state.answers.map(answer => {
      if (letterChar !== answer.letter) {
        return false;
      }

      answered = true;
      answer.status = "answer-show";
      finish++;
      return true;
    });

    score += answered ? 30 : -10;

    this.setState({
      finish : finish,
      score  : score
    });
  }

  render() {
    return (
      <div className="game">
        <div className="score">Score: {this.state.score}</div>
        <div className="letter-board">
          {
            this.state.letters.map(
              (letter, i) => this.renderButton(letter, i)
            )
          }
        </div>

        <div className="answer-board">
          {
            this.state.answers.map(
              (answer, i) => this.renderWord(answer.letter, answer.status, i)
            )
          }
        </div>
      </div>
    );
  }
}

export default Game;