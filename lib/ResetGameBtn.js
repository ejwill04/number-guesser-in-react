import React from 'react';

export const ResetBtn = ({ resetGame, enableBtn }) => {
  return (
    <button
      id='reset-btn'
      disabled={enableBtn()}
      onClick={ () => {
        resetGame();
      }}>Reset</button>
  );
};
