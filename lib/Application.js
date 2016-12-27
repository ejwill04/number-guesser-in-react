import React from 'react';
import { InputField } from './InputField';
import { SubmitBtn } from './SubmitBtn';

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      randomNumber: '',
    };
  }

  componentDidMount() {
    this.setState({ randomNumber: Math.floor(Math.random() * 100) });
  }

  acceptInput(e) {
    this.setState({ userInput: e.target.value });
  }

  compareNumbers() {
    const userInput = parseInt(this.state.userInput, 10);
    const randomNumber = this.state.randomNumber;
    switch (true) {
      case (userInput === randomNumber):
        alert('winner');
        break;
      case (userInput < randomNumber):
        alert('too low');
        break;
      case (userInput > randomNumber):
        alert('too high');
        break;
      default:
        alert('what?');
    }
    // if (this.state.userInput === this.state.randomNumber) {
    // }
    // display message
  }

  render() {
    return (
      <div className='application'>
        <InputField
          userInput={this.state.userInput}
          acceptInput={this.acceptInput.bind(this)} />
        <SubmitBtn
          compareNumbers={this.compareNumbers.bind(this)} />
      </div>
    );
  }

}

// <DisplayGuess />
// <DisplayMessage />
// <ClearBtn />
// <ResetBtn />
