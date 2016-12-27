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
    // compare userInput to rando
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
