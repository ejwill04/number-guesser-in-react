import React from 'react';

export const MaxInputField = ({ acceptMaxInput, maxValue }) => {
  return (
    <input
      id='max-input-field'
      type='number'
      placeholder="Max"
      value={ maxValue }
      onChange={ (e) => {
        acceptMaxInput(e);
      }} />
  );
};
