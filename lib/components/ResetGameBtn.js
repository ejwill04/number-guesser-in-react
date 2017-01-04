import React from 'react';

export const ResetBtn = ({ resetGame, enableResetBtn }) => {
  return (
    <button
      id='reset-btn'
      disabled={enableResetBtn()}
      onClick={ () => {
        resetGame();
      }}>Reset</button>
  );
};
