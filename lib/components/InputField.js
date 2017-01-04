import React from 'react';

export const InputField = ({ userInput, acceptInput, minValue, maxValue, handleKeyUp }) => {
  return (
    <input
      id='input-field'
      type='number'
      placeholder='Your best guess'
      min={ minValue }
      max={ maxValue }
      value={ userInput }
      onKeyUp={ (e) => {
        handleKeyUp(e);
      }}
      onChange={ (e) => {
        acceptInput(e);
      }}
    />
  );
};
