import React from 'react';

export const ClearBtn = ({ clearInput, enableBtn }) => {
  return (
    <button
      id='clear-btn'
      disabled={enableBtn()}
      onClick={ () => {
        clearInput();
      }}
      >Clear</button>
  );
};
