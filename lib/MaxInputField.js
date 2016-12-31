import React from 'react';

export const MaxInputField = ({ acceptMaxInput, maxValue }) => {
  return (
    <div>
      <span>Max</span>
      <input
        id='max-input-field'
        type='number'
        placeholder='Max'
        value={ maxValue }
        onChange={ (e) => {
          acceptMaxInput(e);
        }} />
    </div>
  );
};
