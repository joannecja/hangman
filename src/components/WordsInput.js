import React from 'react';
import Button from './Button';

class WordsInput extends React.Component {
  state = {
    input: ''
  }

  handleChange = (event) => {
    let input = event.target.value;
    this.setState({ input });
  }

  handleClick = () => {
    this.props.updateWords(this.state.input);
  }

  render() {
    return (
      <div className="word-input">
        <textarea onChange={this.handleChange}></textarea>
        <div>
          <Button value="START" className="start-btn" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default WordsInput;