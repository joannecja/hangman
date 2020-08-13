import React from 'react';

class NextButton extends React.Component {
  render() {
    return (
      <button
        className="next-btn"
        onClick={this.props.onClick}
      >
        Next
      </button>
    );
  }
}

export default NextButton;