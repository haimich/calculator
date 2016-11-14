import * as React from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButton from './CalculatorButton';

interface State {
  value: string;
}

export default class App extends React.Component<void, State> {

  constructor(props) {
    super(props);

    this.state = {
      value: '0'
    };
  }

  handleClick(keyValue: string) {
    let newState;

    if (this.state.value === '0') {
      newState = keyValue;
    } else {
      newState = this.state.value + '' + keyValue;
    }

    this.setState({
      value: newState
    });
  }

  render() {
    return (
      <div>
        <CalculatorDisplay value={this.state.value} />
        <p>
          <CalculatorButton keyValue="1" handleClick={this.handleClick.bind(this)} />
          <CalculatorButton keyValue="2" handleClick={this.handleClick.bind(this)} />
          <CalculatorButton keyValue="3" handleClick={this.handleClick.bind(this)} />
        </p>
        <p>
          <CalculatorButton keyValue="4" handleClick={this.handleClick.bind(this)} />
          <CalculatorButton keyValue="5" handleClick={this.handleClick.bind(this)} />
          <CalculatorButton keyValue="6" handleClick={this.handleClick.bind(this)} />
        </p>
        <p>
          <CalculatorButton keyValue="7" handleClick={this.handleClick.bind(this)} />
          <CalculatorButton keyValue="8" handleClick={this.handleClick.bind(this)} />
          <CalculatorButton keyValue="9" handleClick={this.handleClick.bind(this)} />
        </p>
      </div>
    );
  }
}