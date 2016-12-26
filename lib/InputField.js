import React from 'react';

export const InputField = ({ userInput, acceptInput }) => {
  return (
    <input
      id='input-field'
      type='text'
      placeholder='Your best guess'
      value={ userInput }
      onChange={ (e) =>
          {
            acceptInput(e); }
          }
    />
  );
};
