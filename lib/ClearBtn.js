import React from 'react';

export const ClearBtn = ({ clearInput }) => {
  return (
    <button
      id='clear-btn'
      onClick={ () => {
        clearInput();
      }}
      >Clear</button>
  );
};
