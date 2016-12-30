import React from 'react';

export const InputField = ({ userInput, acceptInput, minValue, maxValue }) => {
  return (
    <input
      id='input-field'
      type='number'
      placeholder='Your best guess'
      min={ minValue }
      max={ maxValue }
      value={ userInput }
      onChange={ (e) => {
        acceptInput(e);
      }}
    />
  );
};
