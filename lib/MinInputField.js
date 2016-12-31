import React from 'react';

export const MinInputField = ({ acceptMinInput, minValue }) => {
  return (
    <div>
      <span>Min</span>
      <input
        id='min-input-field'
        type='number'
        placeholder='Enter a min value'
        value={ minValue }
        onChange={ (e) => {
          acceptMinInput(e);
        }} />
    </div>
  );
};
