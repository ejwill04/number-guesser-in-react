import React from 'react';
import { InputField } from './InputField';

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
    };
  }

  acceptInput(e) {
    this.setState({ userInput: e.target.value });
  }

  render() {
    return (
      <div className='application'>
        <InputField
          userInput={this.state.userInput}
          acceptInput={this.acceptInput.bind(this)} />
      </div>
    );
  }

}

// <DisplayGuess />
// <DisplayMessage />
// <SubmitBtn />
// <ClearBtn />
// <ResetBtn />
