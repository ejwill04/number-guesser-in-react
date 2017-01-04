import React from 'react';

export const ClearBtn = ({ clearInput, enableClearBtn }) => {
  return (
    <button
      id='clear-btn'
      disabled={enableClearBtn()}
      onClick={ () => {
        clearInput();
      }}
      >Clear</button>
  );
};
