import React from 'react';

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

export default Word;