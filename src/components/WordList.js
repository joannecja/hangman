import React from 'react';
import Button from './Button';

class WordList extends React.Component {

  render() {
    const show = this.props.showWordList;
    return (
      <div className="word-list">
        <div className="title" onClick={this.props.onClick}>Word List</div>
        <Button
          value={`${(show) ? '-' : '+'}`}
          className="word-list-btn"
          onClick={this.props.onClick}
        />
        {
          show &&
          this.props.words.map( (word, key) => {
            return <div key={key}>{word}</div>
          })
        }
      </div>
    );
  }
}

export default WordList;