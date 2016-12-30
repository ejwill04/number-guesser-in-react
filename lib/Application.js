import React from 'react';
import { InputField } from './InputField';
import { SubmitBtn } from './SubmitBtn';
import { ClearBtn } from './ClearBtn';
import { ResetBtn } from './ResetGameBtn';
import { MessageZone } from './MessageZone';

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      userSubmission: '',
      message: '',
      minValue: 1,
      maxValue: 100,
      randomNumber: '',
    };
  }

  componentDidMount() {
    const minMaxRange = this.state.maxValue - this.state.minValue;
    this.setState({ randomNumber: Math.floor(Math.random() * minMaxRange + this.state.minValue) });
    this.setFocusOnInput();
  }

  acceptInput(e) {
    this.setState({ userInput: e.target.value });
  }

  compareNumbers() {
    this.setState({
      userSubmission: parseInt(this.state.userInput, 10),
      userInput: '' }, () =>
      this.handleSwitch(this.state.userSubmission, this.state.randomNumber));
    this.setFocusOnInput();
  }

  setFocusOnInput() {
    document.getElementById('input-field').focus();
  }

  clearInput() {
    this.setState({ userInput: '' });
  }

  enableBtn() {
    return this.state.userInput.length > 0 ? 0 : 1;
  }

  resetGame() {
    location.reload();
  }

  handleSwitch(userSubmission, randomNumber) {
    let message;
    const tooLowMessage = 'Sorry, that guess is too low. Try a higher number.';
    const tooHighMessage = 'Sorry, that guess is too high. Try a lower number.';
    const boundsMessage = 'keep that number between ' + this.state.minValue + ' and ' + this.state.maxValue;
    const winnerMessage = 'winner';
    const yoCrazyMessage = 'what?';
    switch (true) {
      case (isNaN(userSubmission) || userSubmission === null):
        message = ('enter a number, yo');
        break;
      case (userSubmission < this.state.minValue || userSubmission > this.state.maxValue):
        message = (boundsMessage);
        break;
      case (userSubmission === randomNumber):
        message = (winnerMessage);
        break;
      case (userSubmission < randomNumber):
        message = (tooLowMessage);
        break;
      case (userSubmission > randomNumber):
        message = (tooHighMessage);
        break;
      default:
        message = (yoCrazyMessage);
    }
    this.setState({ message });
  }

  render() {
    return (
      <div className='application'>
        <header>Number Guesser in React</header>
        <MessageZone
          userSubmission={this.state.userSubmission}
          message={this.state.message} />
        <InputField
          userInput={this.state.userInput}
          minValue={this.state.minValue}
          maxValue={this.state.maxValue}
          acceptInput={this.acceptInput.bind(this)} />
        <SubmitBtn
          compareNumbers={this.compareNumbers.bind(this)} />
        <ClearBtn
          clearInput={this.clearInput.bind(this)}
          enableBtn={this.enableBtn.bind(this)} />
        <ResetBtn
          resetGame={this.resetGame.bind(this)}
          enableBtn={this.enableBtn.bind(this)} />
      </div>
    );
  }

}

// <DisplayGuess />
// <DisplayMessage />
// <ClearBtn />
// <ResetBtn />
