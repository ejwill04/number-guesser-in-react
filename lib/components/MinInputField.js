import React from 'react';

export const MinInputField = ({ acceptMinInput, minValue }) => {
  return (
    <input
      id='min-input-field'
      type='number'
      placeholder='Min'
      value={ minValue }
      onChange={ (e) => {
        acceptMinInput(e);
      }} />
  );
};
