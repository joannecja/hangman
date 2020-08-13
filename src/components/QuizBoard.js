import React from 'react';
import * as R from 'ramda';
import Word from './Word';

class QuizBoard extends React.Component {

  render() {
    const splited = R.split('', this.props.word);

    let key = 0;
    const word = [];
    const renderWord = (letter) => {
      let show = (this.props.alphabet.[letter]) ? true : false;
      word.push(
        <Word
          key={key++}
          show={show}
          value={letter}
        />
      )
    }

    R.forEach(renderWord, splited);

    return (
      <div className="quiz-board">
        {word}
      </div>
    );
  }
}

export default QuizBoard;