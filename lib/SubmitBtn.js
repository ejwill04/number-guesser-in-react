import React from 'react';

export const SubmitBtn = ({ compareNumbers }) => {
  return (
    <button
      id='submit-btn'
      type='submit'
      onClick={ () => {
        compareNumbers();
      }}
    >Submit</button>
  );
};
