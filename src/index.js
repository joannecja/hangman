import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Circle extends React.Component {
  render() {
    return (
      <button
        className="circle"
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

class Word extends React.Component {
  render() {
    return (
      <button
        className={this.props.status}
        value={this.props.value}
      >
        {this.props.value}
      </button>
    );
  }
}

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

  renderCircle(letter, i) {
    if (!letter.show) {
      return;
    }
    return <Circle key={letter.letter} value={letter.letter} onClick={ () => { this.checkAnswer(i) } } />;
  }

  renderWord(answer, status, i) {
    return <Word key={i} value={answer} status={status} />;
  }

  checkAnswer(i){
    let finish = this.state.finish;
    const answers = this.state.answers;
    if(finish === answers.length){
      return;
    }

    const letters = this.state.letters;
    letters[i].show = false;

    let score  = this.state.score;
    for (let j = 0; j < answers.length; j++) {
      if(answers[j].letter === letters[i].letter){
        answers[j].status = "answer-show";
        finish++;
        score = score + 30;
      } else {
        score = score - 10;
      }
    }

    this.setState({
      letters: letters,
      answers: answers,
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
              (letter, i) => this.renderCircle(letter, i)
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

// ========================================
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
