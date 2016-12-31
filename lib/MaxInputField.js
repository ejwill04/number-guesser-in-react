import React from 'react';

export const MaxInputField = ({ acceptMaxInput, maxValue }) => {
  return (
    <div>
      <span>Max</span>
      <input
        id='max-input-field'
        type='number'
        placeholder="enter a max value"
        value={ maxValue }
        onChange={ (e) => {
          acceptMaxInput(e);
        }} />
    </div>
  );
};
