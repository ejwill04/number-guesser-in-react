import React from 'react';

export const setFocusOnInput = () => {
  document.getElementById('input-field').focus();
}

export const randomNumGenerator = (maxValue, minValue) => {
  return Math.floor((Math.random() * (maxValue - minValue + 1)) + minValue);
}
