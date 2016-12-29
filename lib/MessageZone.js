import React from 'react';

export const MessageZone = ({ message, userInput }) => {
  if (message) {
    return (
      <div>
        <h3>Your last guess was...</h3>
        <h1>{userInput}</h1>
        <h3>{message}</h3>
      </div>
    );
  } else {
    return (
      <div>Lets play a game</div>
    );
  }
};
