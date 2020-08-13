import React from 'react';
import Letter from './Letter';
import * as R from 'ramda';

class AlphabetBoard extends React.Component {

  render() {
    const letters = [];
    const renderButton = (status, letter) => {
      letters.push(
        <Letter
          key={letter}
          value={letter}
          disabled={status}
          onClick={ () => this.props.onClick(letter) }
        />
      )
    }

    R.forEachObjIndexed(renderButton, this.props.alphabet);

    return (
      <div className="alphabet-board">
        {letters}
      </div>
    );
  }
}

export default AlphabetBoard;