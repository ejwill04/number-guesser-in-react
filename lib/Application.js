import React from 'react';
import { InputField } from './InputField';
import { SubmitBtn } from './SubmitBtn';
import { ClearBtn } from './ClearBtn';
import { ResetBtn } from './ResetGameBtn';
import { MessageZone } from './MessageZone';
import { MinInputField } from './MinInputField';
import { MaxInputField } from './MaxInputField';
import { setFocusOnInput, randomNumGenerator } from './helperFunctions';

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
    setFocusOnInput();
  }

  setRandomNumber() {
    const { maxValue, minValue } = this.state;
    this.setState({
      randomNumber: randomNumGenerator(maxValue, minValue),
    });
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

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.compareNumbers();
    }
  }

  compareNumbers() {
    this.setState({
      userSubmission: parseInt(this.state.userInput, 10),
      userInput: '' }, () =>
      this.handleSwitch(this.state.userSubmission, this.state.randomNumber));
    setFocusOnInput();
  }

  clearInput() {
    this.setState({ userInput: '' });
  }

  enableClearBtn() {
    return this.state.userInput.length > 0 ? 0 : 1;
  }

  enableResetBtn() {
    return this.state.message.length > 0 ? 0 : 1;
  }

  resetGame() {
    this.setState({
      userInput: '',
      userSubmission: '',
      message: '',
      minValue: 1,
      maxValue: 100,
      randomNumber: '',
    });
  }

  increaseRange() {
    const incrementVal = 10;
    this.setState({
      minValue: this.state.minValue - incrementVal,
      maxValue: this.state.maxValue + incrementVal },
      () => {
        this.setRandomNumber();
      });
  }

  handleSwitch(userSubmission, randomNumber) {
    const { minValue, maxValue } = this.state;
    let message;
    switch (true) {
      case (isNaN(userSubmission) || userSubmission === null):
            message = ('enter a number, yo');
            this.setState({ userSubmission: '?' });
            break;
      case (userSubmission < minValue || userSubmission > maxValue):
            message = ('keep that number between ' + minValue + ' and ' + maxValue);
            break;
      case (userSubmission === randomNumber):
            message = ('winner!');
            this.increaseRange();
            break;
      case (userSubmission < randomNumber):
            message = ('Sorry, that guess is too low. Try a higher number.');
            break;
      case (userSubmission > randomNumber):
            message = ('Sorry, that guess is too high. Try a lower number.');
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
              userSubmission={this.state.userSubmission}
              message={this.state.message} />
        <InputField
              userInput={this.state.userInput}
              minValue={this.state.minValue}
              maxValue={this.state.maxValue}
              handleKeyUp={this.handleKeyUp.bind(this)}
              acceptInput={this.acceptInput.bind(this)} />
        <div id='range-container'>
          <h5>Range</h5>
          <MinInputField
                minValue={this.state.minValue}
                acceptMinInput={this.acceptMinInput.bind(this)} />
          <MaxInputField
                maxValue={this.state.maxValue}
                acceptMaxInput={this.acceptMaxInput.bind(this)} />
        </div>
        <div id='submit-clear-container'>
          <SubmitBtn
                compareNumbers={this.compareNumbers.bind(this)} />
          <ClearBtn
                clearInput={this.clearInput.bind(this)}
                enableClearBtn={this.enableClearBtn.bind(this)} />
        </div>
        <ResetBtn
              resetGame={this.resetGame.bind(this)}
              enableResetBtn={this.enableResetBtn.bind(this)} />
      </div>
    );
  }

}

// class Message {
//   tooLow: 'Sorry, that guess is too low. Try a higher number.'
//   tooHigh: 'Sorry, that guess is too high. Try a lower number.'
//   bounds: 'keep that number between ' + this.state.minValue + ' and ' + this.state.maxValue
//   winner: 'winner'
//   yoCrazy: 'what?'
// }
