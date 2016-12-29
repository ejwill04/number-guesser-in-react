import React from 'react';
import { InputField } from './InputField';
import { SubmitBtn } from './SubmitBtn';
import { MessageZone } from './MessageZone';

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      message: '',
      minValue: 1,
      maxValue: 100,
      randomNumber: '',
    };
  }

  componentDidMount() {
    const minMaxRange = this.state.maxValue - this.state.minValue;
    this.setState({ randomNumber: Math.floor(Math.random() * minMaxRange + this.state.minValue) });
  }

  acceptInput(e) {
    this.setState({ userInput: e.target.value });
  }

  compareNumbers() {
    const userInput = parseInt(this.state.userInput, 10);
    const randomNumber = this.state.randomNumber;
    this.handleSwitch(userInput, randomNumber);
  }

  handleSwitch(userInput, randomNumber) {
    let message;
    const tooLowMessage = 'Sorry, that guess is too low. Try a higher number.';
    const tooHighMessage = 'Sorry, that guess is too high. Try a lower number.';
    switch (true) {
      case (userInput === randomNumber):
        message = ('winner');
        break;
      case (userInput < randomNumber):
        message = (tooLowMessage);
        break;
      case (userInput > randomNumber):
        message = (tooHighMessage);
        break;
      default:
        message = ('what?');
    }
    this.setState({ message });
  }

  render() {
    return (
      <div className='application'>
        <header>Number Guesser in React</header>
        <MessageZone
          userInput={this.state.userInput}
          message={this.state.message} />
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
