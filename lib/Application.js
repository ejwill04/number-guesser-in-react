import React from 'react';
import { InputField } from './InputField';
import { SubmitBtn } from './SubmitBtn';
import { ClearBtn } from './ClearBtn';
import { ResetBtn } from './ResetGameBtn';
import { MessageZone } from './MessageZone';
import { MinInputField } from './MinInputField';
import { MaxInputField } from './MaxInputField';
import { RangeBtn } from './RangeBtn';

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
    this.setRandomNumber();
    this.setFocusOnInput();
  }

  setRandomNumber() {
    const { maxValue, minValue } = this.state;
    this.setState({
      randomNumber: this.randomNumGenerator(maxValue, minValue),
    });
  }

  randomNumGenerator(maxValue, minValue) {
    return Math.floor((Math.random() * (maxValue - minValue + 1)) + minValue);
  }

  acceptInput(e) {
    this.setState({ userInput: e.target.value });
  }

  acceptMaxInput(e) {
    this.setState({ maxValue: parseInt(e.target.value, 10) }, () => {
      this.setRandomNumber();
    });
  }

  acceptMinInput(e) {
    this.setState({ minValue: parseInt(e.target.value, 10) }, () => {
      this.setRandomNumber();
    });
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

  increaseRange() {
    const incrementVal = 10;
    this.setState({ minValue: this.state.minValue - incrementVal, maxValue: this.state.maxValue + incrementVal }, () => {
      this.setRandomNumber();
    });
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
        this.setState({ userSubmission: '?' });
        break;
      case (userSubmission < this.state.minValue || userSubmission > this.state.maxValue):
        message = (boundsMessage);
        break;
      case (userSubmission === randomNumber):
        message = (winnerMessage);
        this.increaseRange();
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
        <MinInputField
          minValue={this.state.minValue}
          acceptMinInput={this.acceptMinInput.bind(this)} />
        <MaxInputField
          maxValue={this.state.maxValue}
          acceptMaxInput={this.acceptMaxInput.bind(this)} />
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
