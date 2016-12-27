import React from 'react';

export const InputField = ({ userInput, acceptInput }) => {
  return (
    <input
      id='input-field'
      type='number'
      placeholder='Your best guess'
      min='1'
      max='100'
      value={ userInput }
      onChange={ (e) => {
        acceptInput(e);
      }}
    />
  );
};
