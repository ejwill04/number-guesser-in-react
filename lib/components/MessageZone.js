import React from 'react';

export const MessageZone = ({ message, userSubmission }) => {
  if (message) {
    return (
      <div className='message-zone'>
        <h3>Your last guess was...</h3>
        <h1>{userSubmission}</h1>
        <h3>{message}</h3>
      </div>
    );
  } else {
    return (
      <div className='message-zone'>
        <h3>Lets play a game</h3>
      </div>
    );
  }
};
