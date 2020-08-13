import React from 'react';

class Letter extends React.Component {
  render() {
    return (
      <button
        className={`letter ${(this.props.disabled) ? 'disabled': ''}`}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Letter;