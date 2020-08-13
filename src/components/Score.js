import React from 'react';

class Score extends React.Component {
  render() {
    return (
      <div className="score">
        Score: {this.props.score}
      </div>
    );
  }
}

export default Score;