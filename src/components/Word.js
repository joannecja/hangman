import React from 'react';

class Word extends React.Component {
  render() {
    return (
      <button
        className={`answer ${(this.props.show) ? 'show': 'hide'}`}
        value={this.props.value}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Word;